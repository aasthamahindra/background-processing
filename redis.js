const { Redis } = require('ioredis');

module.exports = new Redis({
    host: '127.0.0.1',
    post: 6379,
    maxRetriesPerRequest: null, // required for bullMQ
});