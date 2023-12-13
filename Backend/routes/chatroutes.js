const express = require('express')

const auth = require('../Middleware/auth')

const controller=require('../controller/chatcontroller')

const router = express.Router();


router.route("/",auth.verifyToken, controller.accessChat);
router.route("/",auth.verifyToken, controller.fetchChats);
router.route("/group",auth.verifyToken,controller.createGroupChat);
router.route("/rename",auth.verifyToken,controller.renameGroup);
router.put("/groupremove",auth.verifyToken, controller.removeFromGroup);
router.put("/groupadd", auth.verifyToken, controller.addToGroup);

module.exports = router;
