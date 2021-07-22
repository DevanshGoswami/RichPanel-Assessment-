const express = require("express");
const router = express.Router();
const axios = require('axios');
const User = require('../Models/userModel');

router.post('/unable-webhook',async(req,res)=>{
    const page_id = req.params.page_id;
    const user_id = req.params.user_id;
    const {access_token} = req.body;
    const feedResponse = await axios.post(`https://graph.facebook.com/${page_id}/subscribed_apps?subscribed_fields=feed&access_token=${access_token}`);
    const messageResponse = await axios.post(`https://graph.facebook.com/${page_id}/subscribed_apps?subscribed_fields=messages&access_token=${access_token}`);

    if(feedResponse.data.success || messageResponse.data.success ){
        User.findOne({userID: user_id},(err,user)=>{
           if(err){
               res.status(200).json(err);
           }
           else{
                user.pages.filter(page => page.id === page_id).hooksInstalled = true;
                user.save();
                res.status(200).json({message: "hooks installed"});
           }
        })
    }
    else{
        res.status(200).json({message: "hooks not installed due to some reason"});
    }
});


module.exports = router;