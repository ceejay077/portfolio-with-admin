const ContactMessage = require("../models/ContactMessage");

// Create a new contact message
exports.createContactMessage = async (req, res) => {
  try {
    const message = new ContactMessage(req.body);
    await message.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error sending message", error });
  }
};

// Get all contact messages (for admin)
exports.getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error });
  }
};
