const express = require('express');
const router = express.Router();
const User  = require('../models/user');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/database');
const passport = require('passport');

router.post("/login",function(req,res ){
    const email = req.body.email;
    const password = req.body.password;
    var token;
    var tokenObj;
    console.log("login request received");

    User.findByEmail(email, function(err,user){
        if (err){
            res.json({state:false,msg:"error occurred"});
            console.log(err);
        }if(!user){
            res.json({state:false,msg:"User not found"});
            console.log("User not found");
        }else if (user){
            console.log("user found");
            console.log(user);

            User.passwordCheck(password, user.password, function(err, isMatch){
                if(err) {
                    console.log(err);
                }if(isMatch){
                    token = jwt.sign(user.toObject(), dbConfig.secret,{
                        expiresIn:604800  //one week
                    });
                    res.json(
                        {
                            state:true,
                            msg:"password and email matched, token created",
                            token:"JWT " + token,
                            userData: {
                                id:user._id,
                                name:user.name,
                                username:user.username,
                                email:user.email
                            }
                        }
                    )
                }else {
                    res.json({state:false, msg:"wrong password "})
                }
            })
        }else{
            console.log("unknown error occured");
            res.json({state:false})
        }
        
    });
});

router.post("/register",function(req,res ){
    const newUser = new User({
        username : req.body.username,
        name : req.body.name,
        email : req.body.email,
        password: req.body.password,
        cart: []
    });
    console.log(req.ip);

    User.saveUser(newUser, function(err,user){
        if(err){
            console.log(err);
            res.json({state:false,msg:"data not inserted", err: err});
        }
        if(user){
            console.log("new user created: ", newUser.username);
            res.json({state:true,msg:"data inserted"});
        }
    });

});


router.post('/profile', passport.authenticate('jwt', {session: false}), function(req, res, next){
    console.log("/profile request received");
    if (req.user){
        res.json({state:true,user: req.user});
    }else if (!req.user){
        res.json({state: false})
    }
});
router.post("/update",function(req,res ){
    const newUser = new User({
        id:req.body._id,
        occupation: req.body.occupation,
        email:req.body.email,
        name:req.body.name,
        username:req.body.username,
        city:req.body.city,
        country: req.body.country,
        img:req.body.img,
        cart: req.body.cart

    });
    console.log("update call recieved");
    User.updateUser(newUser, function(err,user){
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(user){
            res.json({state:true,msg:"data inserted"});
        }
    });
});



module.exports  = router;