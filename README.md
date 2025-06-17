## Building background job processing with retries

### Prerequisites
``` npm install fastify bullmq ioredis ```

### Project Structure
project/
├── server.js         # Fastify app
├── email.queue.js    # Job producer (enqueue)
├── worker.js         # Background processor
└── redis.js          # Shared Redis connection

### Topics covered
- How to enqueue background jobs?
- How to process them in a separate worker?
- How to add retry logic with backoff?
- How to log and handle failures (DLQ -> Dead Letter Queue)

## Result
[▶️ Watch Recording](recordings.mov)