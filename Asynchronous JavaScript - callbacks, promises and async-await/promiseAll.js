const promise1 = Promise.resolve(`Promise 1 resolve`);

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{ 
        resolve(`Promise 2 resolved`)
    },2000)
});

//ata aktar por 2 sec por arekta print korbe
// promise1.then((res)=> console.log(res))
// promise2.then((res)=> console.log(res))

//amra jodi 2 ta promise ke aktar por akta prinat na kore akshathe print korte chai taile amader 
Promise.race([promise1, promise2]).then ((res)=> console.log(res))
