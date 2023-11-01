const fs = require('fs')
const dns = require('dns')

function info(text) {
    console.log(text, performance.now().toFixed(3))
}

console.log('Program start')

//close events
fs.writeFile('./01-event-loop-events/test.txt', 'hello Node.js', () => info('File written'))

//promises
Promise.resolve().then(() => info('Promise 1'))

//next tick
process.nextTick(() => info('Next tick 1'))

//setImmediate (check)
setImmediate(() => info('Immediate 1'))

//timeouts
setTimeout(() => info('Timeout 1'), 0)
setTimeout(() => {
    process.nextTick(() => info('Next tick 2'))
    info('Timeout 2')
}, 100)

//intervals
let intervalCount = 0
const intervalId = setInterval(() => {
    info(`Interval ${intervalCount += 1}`)
    if (intervalCount === 2) clearInterval(intervalId)
}, 50
);

//i/o events
dns.lookup('localhost', (err, address, family) => {
    info('DNS 1 localhost ', address)
    Promise.resolve().then(() => info('Promise 2'))
    process.nextTick(() => info('Next tick 3'))
})

console.log('Program end')