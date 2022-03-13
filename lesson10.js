//1

function getRandom(max, min)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getPromise () 
{
    return new Promise((resolve)=>{
    let a = getRandom(5000,1000)
    console.log(a)
    setTimeout(resolve,a,a)
})}

let p1=getPromise() 
let p2=getPromise() 
let p3=getPromise() 

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values)
    let sum=values.reduce((prev, current)=> prev+current)
    console.log(sum)
    return sum
  });

//2

function getPromise1(b) {
    return new Promise((resolve) => {
        let a = getRandom(5000, 1000)
        setTimeout(resolve, a, b)
    })
}

let promise1=getPromise1(1)
let promise2=getPromise1(2)
let promise3=getPromise1(3)

Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log(value)
    return value
  });

//3

function getNum() {

    return new Promise((resolve) => {
        let a = getRandom(5, 1)
        setTimeout(resolve, 3000, a)
    })
}

async function getSquare() {
    let c = await getNum()
    console.log(c)
    let k = c * c
    console.log(`square of the result ${k}`)
}

getSquare()

//4

function getNum1() {

    return new Promise((resolve) => {
        let a = getRandom(5, 1)
        setTimeout(resolve, 3000, a)
    })
}

function getNum2() {

    return new Promise((resolve) => {
        let a = getRandom(10, 6)
        setTimeout(resolve, 5000, a)
    })
}

async function getSumOfPromises() {
    let pr1 = await getNum1()
    console.log(pr1)
    let pr2 = await getNum2()
    console.log(pr2)
    let k = pr1 + pr2
    console.log(`sum of promises - ${k}`)
}

getSumOfPromises()