const express = require('express');
const router = express.Router();
const controllers = require("../controllers/auth-controllers");

router.route("/home").get(controllers.home);

router.get("/getMember", controllers.getMember);
// router.delete("/deleteMember",controllers.deleteMember)
router.route('/deleteMember').delete(controllers.deleteMember);
router.route('/addMember').post(controllers.addMember);
router.route('/getAllTrainer').get(controllers.getAllTrainer);
router.route("/addTrainer").post(controllers.addTrainer);

module.exports = router;