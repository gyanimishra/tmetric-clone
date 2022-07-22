let i = 0;
// let flag = true
setInterval(() => {
    console.log(i);
    i++
}, 2000)
setTimeout(() => {
    setInterval(() => {
        console.log(i);
        i++
    }, 2000)
}, 1000)
