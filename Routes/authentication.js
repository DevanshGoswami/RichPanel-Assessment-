const express = require("express");
const router = express.Router();
const User = require('../Models/userModel');

router.post('/',(req,res)=>{
    User.findOne({userID: req.body.userID},(err,user)=>{
        if(user){
            res.status(200).json(user);
        }
        else{
            const {name,email,picture,userID,accessToken} = req.body;
            const newUser = new User({name,email,picture,userID,accessToken});
            
            newUser.save((err,created_user)=>{
                if(err){
                    res.status(200).json(err);
                }
                else{
                    res.status(200).json(created_user);
                }
            });
        }
     });
});


module.exports = router;