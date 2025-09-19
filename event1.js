const EventEmitter = require('events');
const emitter = new EventEmitter();


//1
// Listening for an event
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!\n\n`);
});

// Emitting the event
emitter.emit('greet', 'Menaka'); // Output: Hello, Menaka!



//2
emitter.on('sum', function(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
  console.log('this is:', this); // 'this' refers to the emitter object
});

emitter.emit('sum', 5, 10);
