const EventEmitter = require("events");
const emitter = new EventEmitter();


//1
emitter.on('data', (msg) => {
  console.log('Sync:', msg);
  setTimeout(() => console.log('Async:', msg), 1000);
});

emitter.emit('data', 'Hello');
// Output:
// Sync: Hello
// (after 1 sec) Async: Hello





//2
//Use .once() to register a listener that runs only the first time the event is emitted.
//Use case: Authentication success, setup tasks.
emitter.once('login', (user) => {
  console.log(`${user} logged in (first time only)`);
});

emitter.emit('login', 'Menaka');
emitter.emit('login', 'Menaka'); // Ignored
