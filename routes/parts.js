const express = require('express');
const router = express.Router();
const Part  = require('../models/part');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/database');
const passport = require('passport');


router.post("/savepart",function(req,res ){
    const newPart = new Part({
        name:req.body.name,
        condition:req.body.condition,
        rating: req.body.rating,
        comments:new Object(),
        description:req.body.description,
        vehicle_type: req.body.vehicle_type,
        brand:req.body.brand,
        img:req.body.img,
        method:req.body.method,
        author:req.body.author,
        price: req.body.price
    });
    console.log('save part call received');

    Part.savePart(newPart, function(err,part){
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(part){
            res.json({state:true,msg:"data inserted"});
        }
    });

});

router.post("/condition",function (req,res){
    console.log("search by condition call received ");
    Part.partByCondition(req.body.condition, function(err,part){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(part){
            res.json({state:true,msg:"data found",part:part});
        }
    });
});

router.post("/type",function (req,res){
    console.log("search by vehicle type call received ");
    Part.partByVehicle_type(req.body.vehicle_type, function(err,part){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(part){
            res.json({state:true,msg:"data found",part:part});
        }
    });
});

router.post("/brand",function (req,res){
    console.log("search by brand call received ");
    Part.partByBrands(req.body.brand, function(err,part){
        if(err){
            console.log(err);
            res.json({state:false,msg:"data not found",error : err});
        }
        if(part){
            console.log(part);
            res.json({state:true,msg:"data found",part:part});
        }
    });
});

router.post("/id",function(req,res){
    console.log("search by id call received, id :" + req.body._id);
    if(req.body._id){
        Part.partById(req.body._id, function(err,part){
            if(err){
                res.json({state:false,msg:"data not found",error : err});
            }
            if(part){
                res.json({state:true,msg:"data found",part:part});
            }
        });
    }else{
        res.json({state:false,msg:"data not found",error : "not valid id"});
    }
    
});

router.post("/author",function (req,res){
    console.log("search by author call received ");
    Part.partByAuthor(req.body.author, function(err,part){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(part){
            res.json({state:true,msg:"data found",part:part});
        }
    });
});

router.post ("/savecomment", function(req,res){
    const data = {
        id:req.body._id,
        comments:req.body.comments
    };
    console.log("/savecomment call received");
    Part.saveComment(data, function(err,part){
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(part){
            res.json({state:true,msg:"data inserted"});
        }
    });
});

router.post ("/saverate", function(req,res){
    const data = {
        id:req.body._id,
        rating:req.body.rating
    };
    console.log("/saverate call received");
    Part.saveRate(data, function(err,part){
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(part){
            res.json({state:true,msg:"data inserted"});
        }
    });
});

router.post("/update",function(req,res ){
    const newPart = new Part({
        comments:req.body.comments,
        _id:req.body._id,
        name:req.body.name,
        condition:req.body.condition,
        rating: req.body.rating,
        description:req.body.description,
        vehicle_type: req.body.vehicle_type,
        brand:req.body.brand,
        img:req.body.img,
        author:req.body.author,
        price: req.body.price

    });
    console.log("update call recieved");
    console.log(newPart.brand)
    Part.updatePart(newPart, function(err,part){
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(part){
            res.json({state:true,msg:"data inserted"});
        }
    });
});

router.post("/id_mult",function (req,res){
    console.log("search multiple by ids call received ");
    Part.partByIdMult(req.body.partlist, function(err,part){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(part){
            res.json({state:true,msg:"data found",part:part});
        }
    });
});


router.post("/searchall",function (req,res){
    console.log("search all part call received ");
    Part.getAll(function(err,part){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(part){
            res.json({state:true,msg:"data found",part:part});
        }
    });
});




module.exports  = router;