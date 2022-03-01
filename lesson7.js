//1
let a = [1, 2, 3, 4, 5, 6]
 
function rev(arr) {
    return arr.reverse()
}
console.log(rev(a))
 
//2
function getMaxOfArray(arr) {
    return Math.max.apply(null, arr)
  }
console.log(getMaxOfArray(a))
 
//2_1
function maxm (arr){
return Math.max(...arr)
}
console.log(maxm(a))
 
//2_2
function maximum (arr){
    let max = arr.reduce(function(a, b) {
        return Math.max(a, b);
    }, -Infinity)
    return max
}
console.log(maximum(a))
 
//3
let N = 5
let M = 10
 
function fibon(N,M)
{
let f = new Array(N + M-1).fill(0).map((elem, index, currentArray) => {
    if (index === 0) {
        currentArray[index] = 0;
    } else if (index === 1) {
        currentArray[index] = 1;
    } else {
        currentArray[index] = currentArray[index - 2] + currentArray[index - 1];
    }
    return currentArray[index];
});
 
let k = f.slice(N - 1);
 
return k
}
 
console.log(fibon(5,10))
 
//3_1
function fib(n) {
    let a = 0;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}


function createMassive(a, b) {
    let arr1 = []
    for (let i = a; i < a + b; i++) {
        arr1.push(fib(i))
    }
    return arr1
}
console.log(createMassive(N, M))
 


// function findFibonacci(n) // можно еще сделать функцию через рекурсию, но это следующая тема 
// {
//     if (n == 0)
//         return 0;

//     if (n == 1)
//         return 1;

//     return findFibonacci(n - 1) + findFibonacci(n - 2);
// }


//4
let n1 = 3487
let n2 = 3794
 
function count(a, b) {
 
    let a1 = a.toString().split("")
    let a2 = b.toString().split("")
 
    let counter1 = 0
    let counter2 = 0
    for (let i = 0; i < a1.length; i++) {
 
        if (a1[i] === a2[i]) {
            counter1++
        }
    }
    console.log(`${counter1} - matching position and number`)
 
    for (key of a1) {
        for (let i = 0; i < a2.length; i++) {
            if (key === a2[i]) {
                counter2++
            }
        }
    }
    console.log(`${counter2} - matching number`)
}
 
count(n1, n2)


 
//5 
let b = [3, 9, 1, 10, -5]
 
let sort_up = function (arr) {
    return arr.sort((a, b) => a - b)
}
let sort_down = function (arr) {
    return arr.sort((a, b) => b - a) 
}
 
console.log(sort_up(b))
console.log(sort_down(b))
 
//6
let c = [1, 2, 3, 3, 3, 4, 5, 4, 6]

function unique(arr) {
    let result = [];

    for (let value of arr) {
        if (!result.includes(value)) {
            result.push(value);
        }
    }
    return result;
}
console.log(unique(c))
