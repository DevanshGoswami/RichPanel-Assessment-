const express = require("express");
const router = express.Router();
const User = require('../Models/userModel');
const axios = require('axios');

router.post('/',async(req,res)=>{
    User.findOne({userID: req.body.userID},(err,user)=>{
        if(user){
            user.accessToken = req.body.accessToken;
            user.save();
            res.status(200).json(user);
        }
        else{
            const {name,email,picture,userID,accessToken} = req.body;
            const image = picture.data.url;
            const pages_response = await axios.get(`https://graph.facebook.com/${userID}/accounts?access_token=${accessToken}`);
            const pages = pages_response.data;
            const newUser = new User({name,email,picture:image,userID,accessToken,pages});
            
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