const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    artistId: { type: String, required: true },
    artistName: { type: String, required: false },
    index: { type: Number, required: true },
    userMessage: { type: String, required: false },
    aiResponse: { type: String, required: false },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
