import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  console.log("Incoming file upload:", {
    originalname: file.originalname,
    mimetype: file.mimetype
  });

  const isExcel =
    file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
    file.mimetype === "application/octet-stream" ||
    file.originalname.toLowerCase().endsWith(".xlsx");

  if (isExcel) {
    cb(null, true);
  } else {
    console.log("File rejected: Not a valid .xlsx file");
    cb(new Error("Only .xlsx files allowed. Your file was: " + file.mimetype), false);
  }
};

export const upload = multer({
  storage,
  fileFilter
});
