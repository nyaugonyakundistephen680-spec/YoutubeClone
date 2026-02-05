const db = require("../models/db");

exports.uploadVideo = async (req, res) => {
  const { title, description } = req.body;
  const filename = req.file.filename;

  try {
    await db.query(
      "INSERT INTO videos (title, description, filename) VALUES (?, ?, ?)",
      [title, description, filename],
    );
    res.redirect("/"); // back to homepage
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVideos = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM videos ORDER BY uploadDate DESC",
    );
    res.json(rows); // send JSON to frontend
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM videos WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0) return res.status(404).send("Video not found");
    res.json(rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
