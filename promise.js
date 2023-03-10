function getBanana() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('🍌');
        }, 1000);
    });
}

function getApple() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('🍎');
        }, 3000);
    })
}

function getOrange() {
    return Promise.reject(new Error('no 🍊'));
}

Promise.all([getBanana(), getApple()])
    .then(console.log);

Promise.race([getBanana(), getApple()])
    .then(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()])
    .then(console.log)
    .catch(console.error);
