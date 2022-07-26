
const mongoose = require('mongoose');


var partSchema = mongoose.Schema({
    name:String,
    condition:[String],
    rating: Number,
    count:Number,
    comments:Object,
    description:String,
    vehicle_type: [String],
    brand:[String],
    method: String,
    price: Number,
    img: String,
    author: String,
    date: String

});

const Part = module.exports = mongoose.model('sparepart',partSchema);

module.exports.savePart = function(part,callback){
    console.log(part);
    part.save(callback);
};

module.exports.partByBrands = function(brand,callback){
    const query = {brand:{$all : brand}};
    Part.find(query,callback);

};
module.exports.partByCondition = function(condition,callback){
    const query = {condition:{$in : condition}};
    console.log(condition);
    Part.find(query,callback);

};

module.exports.partByVehicle_type = function(vehicle_type,callback){
    const query = {vehicle_type:{$in : vehicle_type}};
    console.log(vehicle_type);
    Part.find(query,callback);

};

module.exports.partByAuthor = function(author,callback){
    const query = {author:{$in : author}};
    console.log(author);
    Part.find(query,callback);

};

module.exports.partByIdMult = function(ids,callback){
    const query = {_id:{$in : ids}};
    console.log(ids);
    Part.find(query,callback);

};

module.exports.partById = function (id,callback){
    const query = {_id : id};
    Part.findOne(query,callback);
};

module.exports.saveComment = function (data,callback){
    Part.findById(data.id, function (err, part) {
        if (err) {
            res.send({error: err});
        }

        part.set(
            {
                comments: data.comments
            }
        );
        part.save(callback);
    });
};

module.exports.saveRate = function (data,callback){
    Part.findById(data.id, function (err, part) {
        if (err) {
            res.send({error: err});
        }

        part.set(
            {
                rating: data.rating
            }
        );
        part.save(callback);
    });
};

module.exports.getAll = function(callback){
    Part.find(callback);
};

module.exports.updatePart = function (newPart,callback) {
    Part.findById(newPart._id, function (err, part) {
        if (err) {
            res.send({error:err});
        }
        
        part.set(
            { name:newPart.name,
                condition:newPart.condition,
                rating: newPart.rating,
                comments:newPart.comments,
                description:newPart.description,
                vehicle_type: newPart.vehicle_type,
                brand:newPart.brand,
                img:newPart.img,
                price:newPart.price,
                author:newPart.author,
                id:newPart._id
            }
        );
        console.log(part)
        part.save(callback);
    });
};