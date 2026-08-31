const { Worker } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null
});

const worker = new Worker("tasks", async job => {
  if (job.name !== "process_text") throw new Error("Unknown task");
  return String(job.data.text).toUpperCase();
}, {
  connection,
  removeOnComplete: { count: 1000 },
  removeOnFail: { count: 1000 }
});

worker.on("completed", job => {
  process.stdout.write(`Task ${job.id} completed\n`);
});

worker.on("failed", (job, error) => {
  process.stderr.write(`Task ${job?.id} failed: ${error.message}\n`);
});
