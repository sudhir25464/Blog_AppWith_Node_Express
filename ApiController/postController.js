const Post= require("../model/postModel");
//const { post } = require("../routes/blog");

exports.createPost = async (req, res) =>{
    try{

        const {title, body} = req.body; // fetch data 
        const  post = new Post({ // define Post body
            title,body,
        });

        const savePost = await post.save();
        res.json({
            post:savePost,
        })
    }
    catch(error){
        res.sendStatus(error);
        
    }
}
// need some more testing
exports.getAllPost = async (req,res)=>{
    try{

        const posts= await Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error){
        res.sendStatus(error);

    }
}