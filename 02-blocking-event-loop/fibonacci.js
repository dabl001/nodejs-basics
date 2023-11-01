function info(text) {
    console.log(text, performance.now().toFixed(3));
}

info("start");

function fib(position) {
    const fibNum = [0, 1];
    for (i = 1; i < position; i++) {
        fibNum.push(fibNum[i - 1] + fibNum[i]);
    }
    // console.log(fibNum)
    return fibNum[position];
}
info(fib(1000));

setTimeout(() => info("timeout"), 0);

const cache = new Map();

function fib1(n) {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n);
        }
        if (cache.has(n)) {
            return resolve(cache.get(n));
        }
        setImmediate(() =>
            fib1(n - 1).then((fibf) =>
                fib1(n - 2).then((fibt) => {
                    cache.set(n, fibf + fibt);
                    resolve(fibf + fibt);
                })
            )
        );
    });
}

fib1(1000).then((res) => info(res));

info("end");
