const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
//const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest ,ensureAuthHome} = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/",ensureAuth, homeController.getIndex);
router.get("/home",ensureAuth , homeController.getHome)
router.get("/profile", ensureAuth, homeController.getProfile);
//router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
