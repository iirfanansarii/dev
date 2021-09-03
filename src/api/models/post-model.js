const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  postTitle: {
    type: String,
    require: true,
    min: 3
  },
  postContent: {
    type: String,
    require: true,
    min: 3
  },
  reactions: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
      },
      time: { type: Date, default: Date.now }
    }
  ],
  comments: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
      },
      comments: {
        type: String,
        trim: true,
        reactions: [
          {
            userId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Users'
            },
            time: { type: Date, default: Date.now }
          }
        ],
        reply: [
          {
            userId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Users'
            },
            reply: {
              type: String,
              trim: true
            },
            reactions: [
              {
                userId: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: 'Users'
                },
                time: { type: Date, default: Date.now }
              }
            ]
          }
        ]
      }
    }
  ]
});

const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;
