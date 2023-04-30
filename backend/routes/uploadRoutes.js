import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

//* Initialize storage engine for uploads
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/"); //* the first paramater is error and second is where we wanna upload
  },
  filename(req, file, cb) {
    cb(
      null,
      //* names file with extension
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); //* gets extension of file
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

//* Only accepts image file
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
