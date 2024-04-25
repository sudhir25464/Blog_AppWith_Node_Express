// import model
const Post =  require("../model/postModel");
const Comment = require("../model/commentModel")

exports.createComment = async (req,res) =>{
    try{
        // fetch data
        const {post,user,body} = req.body;
         // create commnet object
        const comment = new Comment({
            post,user,body
        });

        // save the new comment in the database

        const savedComment = await comment.save();
        // find the post by ID add the new comment to its commnets array
        // push  -->  use for updating
        const  updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments: savedComment._id}}, {new:true})

        .populate("comments")  // populate the comments array with comment document

        .exec();

        res.json({
            post:updatedPost,
        });

    }
    catch(error){

        res.sendStatus(error);
    }
};