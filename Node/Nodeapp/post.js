const express = require("express");
const connectToDatabase = require("./db");
const { mongoose } = require("mongoose");

const router = express.Router();

const postSchema = new mongoose.Schema({
    posttitle: { type: String, required: true },
    postcontent: String,
    url: String,
});

const Post = mongoose.model("post", postSchema);

// router.get("/hello", (req, res) => {
//     console.log("hello");
// });

router.post("/addpost", async (req, res)=> {
    try{
        console.log("hi");

        await connectToDatabase();
        const newPost = new Post(req.body);
        console.log(req.body);

        await newPost.save();
        res.send({newPost});  
    } catch(err) {
        console.error(err);
        throw error;
    }
});




router.get("/getallpost", async (req,res) => {
    console.profile("getallpost");
    try{
        await connectToDatabase();
        Post.find().then((posts) => {
            res.json(posts);
            return posts;
        });
    } catch (err) {
        res.status(500).json({ error: "failed to retrive attributes" })
    }
    console.profileEnd();
});


router.get("/getPostById/:id", async (req, res) => {
    try {
        await connectToDatabase();
        console.log(req.params.id);

        Post.find({_id: req.params.id}).then((posts) => {
            res.json(posts);
        });
        } catch (err) {
            res.status(500).json({error: " Faild to retrieved your desired data"})
    }
});


router.put("/editpost/:id", async (req, res) => {
    try{
        await connectToDatabase();
        console.log(JSON.stringify(req.body));
        console.log(req.params.id);

        const updatedResource = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        console.log(updatedResource);

        if (!updatedResource) {
            console.log("hi");
            return res.status(404).json({ error: "Resource not found "});
        }
        res.json(updatedResource);
    } catch (err) {
        res.status(500).json({error: " Faild to retrieved your desired data"})}
});


module.exports = router;