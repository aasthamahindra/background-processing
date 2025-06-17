const fastify = require('fastify')({ logger: true });
const { addEmailJob } = require('./email.queue');

fastify.post('/send-email', async (req, reply) => {
    try {
        const { to, subject, body } = req.body;
        await addEmailJob({ to, subject, body});

        reply.code(202).send({ message: 'Email job queued'});
    } catch (e) {
        fastify.log.error(`Error adding job: ${e.message}`);
        reply.code(e.statusCode || 500).send({ error: e.message });
    }
})

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err) => {
    if (err) {
        fastify.log.error(`Error starting server: ${err.message}`);
        process.exit(1);
    }
});