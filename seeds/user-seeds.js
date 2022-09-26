const { User } = require('../models');

const userdata = [
    {
        username: 'larry01',
        password: 'password123'
    },
    {
        username: 'curly02',
        password: 'password123'
    },
    {
        username: 'moe03',
        password: 'password123'
    },
    {
        username: 'frankie04',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;