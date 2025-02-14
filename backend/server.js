const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const complaintRoutes = require("./routes/Complaints");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/api", complaintRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/smartHospital", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
