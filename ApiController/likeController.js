
// import
const Post = require("../model/postModel");
const Like = require("../model/likeModel");


exports.likePost = async(req,res) =>{
    try{

        const {post,user}= req.body;


        const likes = new Like({
            user,post,
        });

        const saveLikes= await likes.save();

        // update the post collection basis on  this

        const updatedPost =await Post.findByIdAndUpdate(post, {$push: {likes:saveLikes._id}}, {new:true})
    
        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        res.sendStatus(error);
       
    }
}

exports.unlikePost= async(req,res)=>{
    try{
        const {post, likes }=req.body;

   
       const deletedLike = await Like.findByIdAndDelete({post:post, _id:likes});

      

        // UPDATE th epost collection

        const updatedPost= await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new :true})

        req.json({
            post:updatedPost,
        });
    }
    catch(error){
        res.sendStatus(error);
    }
};
// exports.dummyLike= (req,res)=>{
//     res.send("This is dummy page");
// }