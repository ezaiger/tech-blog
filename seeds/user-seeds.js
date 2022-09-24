const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'larry01',
        email: 'stoog1@yahoo.com',
        password: 'password123'
    },
    {
        username: 'curly02',
        email: 'stoog2@yahoo.com',
        password: 'password123'
    },
    {
        username: 'moe03',
        email: 'stoog3@yahoo.com',
        password: 'password123'
    },
    {
        username: 'frankie04',
        email: 'stoog4@yahoo.com',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;