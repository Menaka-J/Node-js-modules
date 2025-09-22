const EventEmitter = require("events");
const emitter = new EventEmitter();


//1
//emitting error
emitter.on('error', (err) => {
  console.error('Error happened:', err.message);
});

emitter.emit('error', new Error('Something went wrong'));




//2
// Synchronous (blocking)
emitter.on('calc', n => {
  // heavy CPU work blocks next listeners
  const result = fibonacci(n); // (very slow for large n)
  console.log('Result', result);
});

// Async (non‑blocking) – preferred
emitter.on('calc', async n => {
  const result = await computeHeavy(n); // returns a Promise
  console.log('Result', result);
});