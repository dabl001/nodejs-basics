import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => {
    console.log('first event listener');
});
myEmitter.on('myEvent', () => {
    console.log('second event listener');
});

myEmitter.on('otherEvent', () => console.log('other event'));

myEmitter.setMaxListeners(25);
console.log(myEmitter.getMaxListeners()); //default is 10 listeners

console.log(myEmitter.eventNames());

setTimeout(() => myEmitter.emit('myEvent'), 1000);
