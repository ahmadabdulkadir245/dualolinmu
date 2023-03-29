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
const multer = require('multer');
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/users")
const postRoutes = require("./routes/posts")
const cloudinary = require("./util/cloudinary")
const cookieParser = require("cookie-parser")
const {CloudinaryStorage} = require('multer-storage-cloudinary')
require("dotenv").config()



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

// Send a ping request to the MySQL server every 5 minutes
setInterval(() => {
  pool.query('SELECT 1', (err, rows) => {
    if (err) throw err;
    console.log('Ping sent to MySQL server');
  });
}, 5 * 60 * 1000);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log("Server is running....")
})
