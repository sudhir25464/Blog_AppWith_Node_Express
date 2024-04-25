const express = require("express");
const router=express.Router();

// import controller

//const{dummyLike, likePost}= require("../ApiController/ikeContriller");
const{createComment } = require("../ApiController/commentController");
const { createPost, getAllPost } = require("../ApiController/postController");
const {likePost, unlikePost} = require("../ApiController/likeController");






// Mapping 
 //router.get("/dummyroute",dummyLike);
router.post("/comments", createComment);
router.post("/newpost",createPost);
router.get("/getAllpost",getAllPost);
router.post("/likes/like",likePost);
router.post("/like/unlike",unlikePost);



// eExport

module.exports=router;