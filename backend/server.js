const express = require('express')
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
// const userRoute = require("./routes/users");
// const authRoute = require("./routes/auth");
const router = express.Router();
const PORT = process.env.PORT || 3000
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//db_connection
const initConnectionPool = require('./db/dbConnect');
initConnectionPool()
.then((data)=>{
    console.log('mongo_data_connect_______________');
})

app.listen(PORT,()=>console.log('backend server'))