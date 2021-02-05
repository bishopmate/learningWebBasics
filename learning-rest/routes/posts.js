const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');


// Getting all the posts
router.get('/', async (req, res) => {

  try{
    const posts = await Post.find().limit(10);
    res.json(posts);
  }catch(err){
    res.json({message : err});
  }

})


// Creating a Post
router.post('/', async (req, res) => {
  const post = new Post({
    title : req.body.title,
    description : req.body.description
  });

  try{
    const savedPost = await post.save();
    res.json(savedPost);
  }catch(err){
    res.json({message : err});
  }
});

// Getting a specific post
router.get('/:postId', async(req, res) => {
  try{
    const specificPost = await Post.findById(req.params.postId);
    res.json(specificPost); 
  }catch(error){
    res.json({ message : error.message });
  }
  
});

// Deleting a post
router.delete('/:postId', async(req, res) => {
  try{
    const removedPost = await Post.remove({ _id : req.params.postId});
    res.json(removedPost);
  }catch(error){
    res.json({ message : error.message });
  }
})

// Deleting a post
router.patch('/:postId', async(req, res) => {
  try{
    const updatePost = await Post.updateOne(
      { _id : req.params.postId },
      { $set : { title : req.body.title, description : req.body.description }}
    );
    res.json(updatePost);
  }catch(error){
    res.json({ message : error.message });
  }
});

module.exports = router;