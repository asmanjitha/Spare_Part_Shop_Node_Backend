const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    password: String,
    id:String,
    email:   String,
    name:   String,
    username:  String,
    occupation: String,
    cart: [String],
    city : String,
    country: String,
    img: String


});

const User = module.exports = mongoose.model("User",userSchema);

module.exports.saveUser = function(newUser,callback){
    console.log(newUser);
    newUser.save(callback);
};

module.exports.findByEmail = function (email,callback){
    const query = {email : email};
    User.findOne(query,callback);
};

module.exports.passwordCheck = function(plainPassword,hashed,callback){
    // bcrypt.compare(plainPassword, hashed, function(err, res) {
    //     if (err) {
    //         console.log(err);
    //         callback(false, err)
    //     }
    //     if(res){
    //         callback(true,res);
    //     }
    // });
    if(plainPassword == hashed){
        callback("password matched", true);
    }else{
        callback("password mismatched", false);
    }
};

module.exports.findUserById = function (id,callback) {
    User.findById(id,callback);
};

module.exports.updateUser = function (newUser,callback) {
    User.findById(newUser.id, function (err, user) {
        if (err) {
            res.send({error:err});
        }

        user.set(
                { occupation: newUser.occupation,
                    email:newUser.email,
                    name:newUser.name,
                    username:newUser.username,
                    city:newUser.city,
                    country: newUser.country,
                    img:newUser.img,
                    cart: newUser.cart
                }
            );
        user.save(callback);
    });
}