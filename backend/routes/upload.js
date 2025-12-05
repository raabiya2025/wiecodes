const express = require("express");
const multer = require("multer");
const ExifParser = require("exif-parser");
const fs = require("fs");

const router = express.Router();

// configure multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

// upload route
router.post("/upload", upload.single("image"), (req, res) => {

    const filePath = req.file.path;
    const buffer = fs.readFileSync(filePath);

    const parser = ExifParser.create(buffer);
    const exif = parser.parse();

    const latitude = exif.tags.GPSLatitude;
    const longitude = exif.tags.GPSLongitude;

    res.json({
        message: "Image uploaded successfully",
        imagePath: filePath,
        gps: { latitude, longitude }
    });
});

module.exports = router;
