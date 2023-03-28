//  using module imports
// import express from "express";
// import cors from 'cors'
// import multer from "multer";
// import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/users.js";
// import postRoutes from "./routes/posts.js";
// import cookieParser from "cookie-parser";

// using normal imports
const express = require('express')
require("dotenv").config()
const cors = require('cors')
const path = require('path')
const multer = require('multer');
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/users")
const postRoutes = require("./routes/posts")
const cloudinary = require("./util/cloudinary")
const cookieParser = require("cookie-parser")
const {CloudinaryStorage} = require('multer-storage-cloudinary')



const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: '*', 
}));
app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

//  for production
const helmet = require('helmet');
const compression = require('compression');

app.use(helmet());
app.use(compression());

// image upload
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/gif'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const postImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Daulolinmu/post-images',
  },
  fileFilter: fileFilter
});

const cloudinaryPostImageUpload = multer({ storage: postImageStorage });

app.post('/post-image', cloudinaryPostImageUpload.single('image'), (req, res) => {
  // Get file details from multer
  const { originalname, path } = req.file;
  if (!req.file) {
    console.log('Resuqest file doesnt exist')
  }
  // Upload file to Cloudinary
  cloudinary.uploader.upload(path, { public_id: originalname }, (error, result) => {
    if (error) {
      console.log('Error uploading file to Cloudinary:', error);
      res.status(500).json({ message: 'Error uploading file to Cloudinary' });
    } else {
      console.log('File uploaded to Cloudinary:', result);
      res.status(200).json({ message: 'File uploaded to Cloudinary', image: result.secure_url });
    }
  });
});

// app.post("/api/upload", upload.single("file"), function (req, res) {
//   const file = req.file;
//   res.status(200).json(file.filename);
// });

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(4000, () => {
  console.log("Connected!");
});
