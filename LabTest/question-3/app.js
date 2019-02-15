const delayedPromise = (num) => {
    const p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(num * num);
        }, 2000)
    })
    return p;
}

const delayedPromise2 = (num) => {
    const p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(num * num);
        }, 2000)
    })
    return p;
}

const resolveAll = () => {
    const p = new Promise(function (resolve, reject) {
        return Promise.all([delayedPromise(6), delayedPromise2(7)])
            .then((values) => console.log(values));
    })
    return p;
} 
resolveAll()