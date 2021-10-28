const express = require('express')
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const router = require('./router')
const cors = require('cors')
const PORT = process.env.PORT || 3000

dotenv.config();
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
//db_connection
const initConnectionPool = require('./API/db/dbConnect');
initConnectionPool()
.then((data)=>{
    console.log('mongo_data_connect_______________');
})

app.use('/', router);

app.listen(PORT,()=>console.log('backend server'))