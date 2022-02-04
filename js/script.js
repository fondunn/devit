{
    function primeArray(number) {
        let prime = 2
        const arr = []

        while (arr.length < number) {
            for (let num = 2; num < prime; num++) {
                if (prime % num === 0) {
                    prime++
                    continue
                }
            }
            arr.push(prime)
            prime++
        }
        return arr
    }
    //console.log(primeArray(5))
}
{
    let str = 'У Пети было 10 яблок, 2.5 он отдал Маше, 3.5 Васе и 4 оставил себе.'
    const re = /\d+(\.\d)?/g

    //console.log(str.match(re))
}
{
    let str = 'assdssddffffrrreeeweggggg'
    const re = /(.)\1{1,}/g

    const duplicates = string => string.replace(re, (a, b) => b + a.length)
    //console.log(duplicates(str))
}
{
    const exampleArr = [
        { a: { b: [{ c: 4 }, { c: 5 }] } },
        { a: { b: [{ c: 6 }, { c: 7 }] } }
    ]
    const exampleObj = { a: { b: { c: 5 } } }

    function get(obj, path) {
        const arr = path.split('.')
        let result = obj
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] in result) {
                result = result[arr[i]]
            }
            continue
        }
        return result
    }

    // console.log(get(exampleArr, '0.a.b.1.c'))
    // console.log(get(exampleObj, 'a.b'))

}
{
    function getRandomNumber() {
        const numbers = []

        return randomNumber = () => {
            if (numbers.length > 100) return new Error('Error')
            let num = Math.floor(Math.random() * 101)

            numbers.includes(num) ? randomNumber() : numbers.push(num)

            return numbers[numbers.length - 1]
        }
    }

    function run(times, func) {
        let i = times
        let cycle = func
        while (i !== 0) {
            console.log(cycle())
            i--
        }
    }
    // run(102, getRandomNumber())
}

{

    class ConcurrencyQueue {
        constructor(concurrency) {
            this.concurrency = concurrency;
            this.requests = [];
            this.running = [];
        }

        queue(request) {
            this.requests.push(request);
        }

        deQueue() {
            return this.running.shift();
        }

        queuing() {
            while (this.running.length < this.concurrency && this.requests.length) {
                const result = this.requests.shift();
                result.then(message => {
                    console.log(message);
                    this.deQueue();
                    this.queuing();
                });
                this.running.push(result);
            }
        }
    }

    function createReq(count) {
        const arr = [];
        
        for (let i = 0; i < count; i++) {
            const ms = Math.floor(Math.random() * 11) * 1000
            let p = new Promise(res => {
                setTimeout(() => {
                    res(`Request ${i} resolved with ${ms} ms`);
                }, ms)
            })
            arr.push(p);
        }
        return arr;
    }

    let promises = createReq(10);

    const concQueue = new ConcurrencyQueue(3);

    promises.forEach(request => concQueue.queue(request))

    // concQueue.queuing();

}