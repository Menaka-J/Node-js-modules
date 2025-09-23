//cheatsheet event module



// 1️ Create an EventEmitter
const { EventEmitter, events, EventTarget } = require('node:events');
const emitter = new EventEmitter();

// 2️ Basic listeners
emitter.on('data', (msg) => console.log('Data', msg));
emitter.once('once', () => console.log('Runs once'));

// 3️ emit
emitter.emit('data', 'hello');

// 4️ Error handling (must have)
emitter.on('error', err => console.error('ERR', err));

// 5️ Async listener (via async/await)
emitter.on('async', async (n) => {
  const result = await heavyWork(n);
  console.log('Async result', result);
});

// 6️ Promise‑rejection capture
EventEmitter.captureRejections = true;
emitter.on('async', async () => {
  // rejection becomes an 'error' event automatically
  return Promise.reject(new Error('Oops'));
});
emitter.on('error', (e) => console.error('Captured rejection', e.message));

// 7️ Once‑only
emitter.once('init', () => console.log('Init once'));

// 8️ EventTarget (DOM‑style)
const et = new EventTarget();
et.addEventListener('msg', e => console.log('DOM', e.type, e.detail));
et.dispatchEvent(new CustomEvent('msg', { detail: { foo: 'bar' } }));

// 9️ AsyncResource
class MyAsync extends EventEmitterAsyncResource {
  async do() {
    this.emit('start');
    await new Promise(r => setTimeout(r, 50));
    this.emit('end');
  }
}
const a = new MyAsync();
a.on('start', () => console.log('Started'));
a.do();

// 10️ Await a one‑time event
(async () => {
  const [payload] = await events.once(emitter, 'ready');
  console.log('Ready with', payload);
})();