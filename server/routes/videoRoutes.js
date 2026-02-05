const express = require("express");
const router = express.Router();
const multer = require("multer");
const videoController = require("../controllers/videoController");

// Multer setup for uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.post("/upload", upload.single("video"), videoController.uploadVideo);
router.get("/", videoController.getVideos);
router.get("/:id", videoController.getVideoById);

module.exports = router;
