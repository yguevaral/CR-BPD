const express = require("express");
const path = require("path");
const cors = require('cors')
require('dotenv').config();

const app = express();
// settings
app.set('port', process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(express.json());
app.use(cors())

//routes
app.use('/', require("./routes/index"));
//app.use('/api/products', require("./routes/products"));
//app.use('/product', require("./routes/product"));
//app.use('/cart', require("./routes/cart"));
//app.use('/api/invitacion', require("./routes/invitacions"));



//static files
app.use(express.static(path.join(__dirname, "public")))
module.exports = app;