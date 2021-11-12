const express = require('express')
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const router = require('./router')
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.API_PORT || 3000
const path = require('path')
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
app.use(express.static(path.join(__dirname, '../frontend/build')));

require("./API/passport/config")(app);
//本番用
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
});
//開発用
app.use('/', router);

app.listen(PORT,()=>console.log('backend server'))