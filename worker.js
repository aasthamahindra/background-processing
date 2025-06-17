// worker - takes the job from queue and processes it
const { Worker } = require('bullmq');
const connection = require('./redis');

const worker = new Worker('email', async (job) => {
    const { to, subject, body } = job.data;
    // simulate email sending
    console.log(`Sending email to ${to}...`);
    if (Math.random() < 0.5) {
        throw new Error('Fake failure to test retry');
    }
    console.log(`Email sent to ${to}`);
}, { connection });

worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
    console.log(`Job ${job.id} failed: ${err.message}`);
});