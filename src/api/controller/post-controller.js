const posts = require('../models/post-model');

const {
  mongodbError,
  postCreated,
  postCreationFailed,
  postFetched,
  postNotFound,
  postFound,
  postsNotFound,
  commentAdded,
  invalidPostId,
} = require('../constants');

exports.createPost = (req, res) => {
  const data = req.body;
  const { customerId } = req;
  const { postTitle, postContent } = data;
  const newpost = new posts({ userId: customerId, postTitle, postContent });
  newpost.save((err, results) => {
    if (err) {
      return res.status(500).json({
        message: mongodbError,
        error: err,
      });
    }
    if (results) {
      return res.status(201).json({
        message: postCreated,
        post: results,
      });
    }
    return res.status(400).json({
      message: postCreationFailed,
    });
  });
};

exports.getAllPost = (req, res) => {
  posts
    .find({})
    // .populate({ path: 'Users', select: { name: 1 } })
    .exec()
    .then((results) => {
      if (!results) {
        return res.status(404).send({ message: postNotFound });
      }
      if (results) {
        return res.status(200).json({
          message: postFetched,
          records: results.length,
          posts: results,
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: mongodbError,
        error: err,
      });
    });
};

exports.getPostByPostId = (req, res) => {
  const { postId } = req.params;
  posts
    .find({ _id: postId })
    // .populate({ path: 'Users', select: { name: 1 } })
    .exec()
    .then((results) => {
      if (!results) {
        return res.status(404).send({ message: postsNotFound });
      }
      return res.status(200).json({
        message: postFound,
        post: results,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: mongodbError,
        error: err,
      });
    });
};

exports.commentOnPost = (req, res) => {
  const { postId } = req.params;
  const { customerId } = req;
  const { comments } = req.body;
  posts.findOne({ _id: postId }).exec((err, validPost) => {
    if (err) {
      return res.status(400).json({
        message: invalidPostId,
      });
    }
    if (validPost) {
      let condition;
      let update;
      condition = { _id: postId };
      update = {
        $push: {
          comments: [{ userId: customerId, comments }],
        },
      };
      posts
        .findOneAndUpdate(condition, update, { new: true })
        .exec((err, results) => {
          if (err) {
            return res.status(500).json({
              message: mongodbError,
              error: err,
            });
          }
          return res.status(200).json({
            message: commentAdded,
          });
        });
    }
  });
};
