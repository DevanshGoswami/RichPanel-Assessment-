const express = require("express");
const router = express.Router();

const authRoutes = require('./authentication');

router.use('/auth', authRoutes);
// router.use('/comments', commentRoutes);
// router.use('/messages',messageRoutes);


module.exports = router;