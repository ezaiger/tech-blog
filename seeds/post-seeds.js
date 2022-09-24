const { Post } = require('../models');

const postdata = [
    {
        title: 'Why MVC is so important',
        post_content: 'MVC allows developers to maintain a true seperation of concerns...',
        user_id: 1
    },
    {
        title: 'Authentication vs. Authorization',
        post_content: 'There is a difference between authentication and authorization...',
        user_id: 2
    },
    {
        title: 'Object-Relational Mapping',
        post_content: 'I have really loved learning about ORMs...',
        user_id: 3
    },
    {
        title: 'All About Sessions',
        post_content: 'Session is a variable on the backend server side...',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;