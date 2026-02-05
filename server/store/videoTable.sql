CREATE DATABASE youtube_clone;
USE youtube_clone;

CREATE TABLE videos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  filename VARCHAR(255),
  uploadDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);