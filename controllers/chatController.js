const { GoogleGenerativeAI } = require("@google/generative-ai");
const Chat = require("../models/Chat");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const handleChat = async (req, res) => {
  const { artistId, artistName, userMessage, userId } = req.body;

  if (!userId || !artistId || !artistName || !userMessage) {
    return res.status(400).json({
      error: "User ID, Artist ID, Artist Name, and User Message are required",
    });
  }

  try {
    const latestChat = await Chat.find({ artistId, userId })
      .sort({ index: -1 })
      .limit(1);
    const nextIndex = latestChat.length > 0 ? latestChat[0].index + 1 : 0;

    const prompt = `You are an assistant knowledgeable about the artist named "${artistName}". Please answer the following question based on your knowledge of the artist and their music. If the question is not related to the artist or their music, respond by saying that you can only answer questions about the artist and their music.\n\nQuestion: ${userMessage}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiResponseText = await response.text();

    const chat = new Chat({
      userId,
      artistId,
      artistName,
      index: nextIndex,
      userMessage,
      aiResponse: aiResponseText,
    });

    await chat.save();

    res.status(201).json({
      userMessage,
      aiResponse: aiResponseText,
    });
  } catch (error) {
    console.error("Error in handleChat:", error);
    res
      .status(500)
      .json({ error: "Failed to handle chat", details: error.message });
  }
};

const getChatHistory = async (req, res) => {
  const { artistId, userId } = req.params;

  try {
    const chats = await Chat.find({ artistId, userId }).sort({ index: 1 });

    if (!chats.length) {
      return res.status(404).json({ message: "No chat history found" });
    }

    res.status(200).json(chats);
  } catch (error) {
    console.error("Error retrieving chat history:", error);
    res
      .status(500)
      .json({
        error: "Failed to retrieve chat history",
        details: error.message,
      });
  }
};

module.exports = {
  handleChat,
  getChatHistory,
};
