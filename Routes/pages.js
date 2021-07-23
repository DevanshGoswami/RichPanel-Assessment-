const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const User = require('../Models/userModel');


router.get('/',(req,res)=>{
     // Your verify token. Should be a random string.
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {

    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});


router.post('/',(req,res)=>{
    
    let body = req.body;

    // Checks if this is an event from a page subscription
    if (body.object === 'page') {
  
      // Iterates over each entry - there may be multiple if batched
      body.entry.forEach(function(entry) {
        var event = entry.messaging ? {
          type: "message", value: entry.messaging[0]
        } :{
          type: "feedchange", value: entry.changes[0]
        };
        
           User.aggregate([{'pages.id':body.id}],(err,user)=>{
             user.pages.forEach(page=>{
               if(page.id === body.id){
                  page.activity.push(event);
               }
             });
             user.save();
           })
         
      });
      // Returns a '200 OK' response to all requests
      res.status(200).send('EVENT_RECEIVED');
    } else {
  
      // Returns a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
});

router.get('/enable',(req,res)=>{
    const {page_id,user_id,access_token} = req.body;
    axios.post(`https://graph.facebook.com/${page_id}/subscribed_apps?subscribed_fields=feed&access_token=${access_token}`)
    .then(response=>{
        if(response.data.success === true){
            User.findOne({userID:user_id},(err,user)=>{
                if(err){
                    res.status(200).json(err);
                }
                else{
                     user.pages.forEach(page=>{
                         if(page.id==page_id){
                             page.hooksInstalled = true;
                         }
                     });
                     user.save();
                     res.status(200).json({message: "hooks installed"});
                }
             });
        }
    })
    .catch(err=>res.status(200).json(err));
});


module.exports = router;