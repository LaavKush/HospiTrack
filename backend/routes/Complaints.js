const express = require("express");
const multer = require("multer");
const Complaint = require("../models/Complaint");
const path = require("path");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to the "uploads" directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Filename with timestamp
  },
});

const upload = multer({ storage });

// Route to submit a complaint (with image upload)
router.post("/complaints", upload.single("image"), async (req, res) => {
  try {
    const { issue, description } = req.body;
    const image = req.file ? path.join("uploads", req.file.filename) : null;

    const newComplaint = new Complaint({
      issue,
      description,
      image,
    });

    await newComplaint.save();
    res.status(201).json({ message: "Complaint submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit complaint", error: err });
  }
});

module.exports = router;
