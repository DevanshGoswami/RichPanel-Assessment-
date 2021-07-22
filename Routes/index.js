const express = require("express");
const router = express.Router();

const authRoutes = require('./authentication');
const pageRoutes = require('./pages');

router.use('/auth', authRoutes);
router.use('/pages/:user_id/:page_id',pageRoutes);
// router.use('/comments', commentRoutes);
// router.use('/messages',messageRoutes);


module.exports = router;