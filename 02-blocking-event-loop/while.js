const fs = require('fs')
let isRunning = true

setTimeout(() =>{
    console.log('timeout')
    isRunning = false}, 6
)
process.nextTick(() => console.log('Next tick'))

function setImmediatePromise() {
    return new Promise((resolve, rejects)=>{
        setImmediate( ()=> {
            console.log('immediate')
            resolve()
        })
    })
}

async function whileLoop(){
    while (isRunning) {
        console.log('While loop is running...')
        await setImmediatePromise()
    }
}

whileLoop().then(()=> console.log('while loop ended!'))