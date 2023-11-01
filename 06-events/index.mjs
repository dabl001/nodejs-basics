import EventEmitter from 'events';

const myEmitter = new EventEmitter();

const timeoutFn = (secondsQty) => {
    console.log(`Timeout event in ${secondsQty} seconds!`);
};

myEmitter.on('timeout', timeoutFn);

setTimeout(() => myEmitter.emit('timeout', 1), 1000);
setTimeout(() => myEmitter.emit('timeout', 2), 2000);

myEmitter.once('singleEvent', () => {
    console.log('Single event occured');
});

setTimeout(() => myEmitter.emit('singleEvent', 1), 500);
setTimeout(() => myEmitter.emit('singleEvent', 2), 1500);

//removing listener from event
setTimeout(() => myEmitter.off('timeout', timeoutFn), 3000);

setTimeout(() => myEmitter.emit('timeout', 4), 4000);
