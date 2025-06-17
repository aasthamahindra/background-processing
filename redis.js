const { Redis } = require('ioredis');

// by default redis runs on localhost:6379
module.exports = new Redis();