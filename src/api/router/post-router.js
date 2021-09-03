const router = require('express').Router();
const {
  createPost,
  getAllPost,
  getPostByPostId,
  commentOnPost,
} = require('../controller/post-controller');

const customerAuth = require('../middleware/customerAuth');
router.post('/create/post', customerAuth, createPost);
router.put('/comment/on/post/:postId', customerAuth, commentOnPost);
router.get('/post/all', getAllPost);
router.get('/post/:postId', customerAuth, getPostByPostId);

module.exports = router;
