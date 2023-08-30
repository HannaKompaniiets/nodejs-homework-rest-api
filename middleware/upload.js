const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfiq = multer.diskStorage({
  destination: tempDir,
});

const upload = multer({
  storage: multerConfiq,
});

module.exports = upload;
