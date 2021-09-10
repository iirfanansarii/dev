const Posts = require('../models/post-model');

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
  commentNotAdded,
} = require('../constants');

exports.createPost = (req, res) => {
  const data = req.body;
  const { customerId } = req;
  const { postTitle, postContent } = data;
  const newpost = new Posts({ userId: customerId, postTitle, postContent });
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
  Posts.find({})
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
    .catch((err) =>
      res.status(500).json({
        message: mongodbError,
        error: err,
      })
    );
};

exports.getPostByPostId = (req, res) => {
  const { postId } = req.params;
  Posts.find({ _id: postId })
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
    .catch((err) =>
      res.status(500).json({
        message: mongodbError,
        error: err,
      })
    );
};

exports.commentOnPost = (req, res) => {
  const { postId } = req.params;
  const { customerId } = req;
  const { comments } = req.body;
  if (!postId) {
    return res.status(400).sendd({ message: 'Post id not found' });
  }
  if (!customerId) {
    return res.status(400).send({ message: 'Customer id not found' });
  }
  if (!comments) {
    return res.status(400).send({ message: 'Should not be empty' });
  }
  Posts.findOne({ _id: postId }).exec((err, validPost) => {
    if (err) {
      return res.status(400).json({
        message: invalidPostId,
      });
    }
    if (validPost) {
      const condition = { _id: postId };
      const update = {
        $push: {
          comments: [{ userId: customerId, comments }],
        },
      };
      Posts.findOneAndUpdate(condition, update, { new: true })
        .then((response) =>
          res.status(200).send({ message: commentAdded, response })
        )
        .catch((err) => res.status(400).json({ message: commentNotAdded }));
      // .exec((err, results) => {
      //   if (err) {
      //     return res.status(500).json({
      //       message: mongodbError,
      //       error: err,
      //     });
      //   }
      //   if (results) {
      //     return res.status(200).json({
      //       message: commentAdded,
      //     });
      //   }
      //   return res.status(400).json({
      //     message: 'Comments could not posted',
      //   });
      // });
    }
    return null;
  });
  return null;
};
