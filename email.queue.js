// producer - it loads the task/job to the queue
const { Queue } = require('bullmq');
const connection = require('./redis');

const emailQueue = new Queue('email', { connection });

const addEmailJob = async (data) => {
    await emailQueue.add('send_email', data, {
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 3000
        },
        removeOnComplete: true,
        removeOnFail: false,
    });
}

module.exports = { addEmailJob };
