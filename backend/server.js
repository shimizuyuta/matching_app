const express = require('express')
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const router = require('./router')
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.API_PORT || 3000

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
//db_connection
const initConnectionPool = require('./API/db/dbConnect');
initConnectionPool()
.then((data)=>{
    console.log('mongo_data_connect_______________');
})

require("./API/passport/config")(app);
app.use('/', router);

app.listen(PORT,()=>console.log('backend server'))