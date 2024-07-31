const express = require("express");
const router = express.Router();
const { handleChat, getChatHistory } = require("../controllers/chatController");

router.post("/chats", handleChat);

router.get("/chats/:artistId/:userId", getChatHistory);

module.exports = router;
