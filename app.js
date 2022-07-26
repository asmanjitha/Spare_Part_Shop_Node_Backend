const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port  = process.env.PORT || 3000
const passport = require('passport');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
require('./config/passportadmin')(passport);

const config = require("./config/database");

const user  = require("./routes/users");
const part = require("./routes/parts");

const connection = mongoose.connect(config.database, 
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    );
if (connection){
    console.log("database connected");
}else{
    console.log("database not connected");
}

app.use(express.static(path.join(__dirname,"public")));
app.use('/user',user);
app.use('/part',part);


app.listen(port,function(){
    console.log("listening to port "+port);
});