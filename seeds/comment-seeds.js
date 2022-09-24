const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'This was a really great post!',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'I learned about this in class the other day!',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'Do you have additional insight to this topic?',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'What else did you learn regarding this topic?',
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: 'Great writing! I enjoy reading what you have to say',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Not my favorite article of yours, but I appreciate the detail',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Cool stuff, much wow',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'I did not know this topic could be so interesting!',
        user_id: 4,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;