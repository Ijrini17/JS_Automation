"use strict";
// 1
const a = [1, 2, 3, 4, 5, 6];
function rev(arr) {
    return arr.reverse();
}
console.log(rev(a));
// 2
function getMaxOfArray(arr) {
    return Math.max.apply(null, arr);
}
console.log(getMaxOfArray(a));
// 2_1
function maxm(arr) {
    return Math.max(...arr);
}
console.log(maxm(a));
// 2_2
function maximum(arr) {
    const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    return max;
}
console.log(maximum(a));
// 3
const N = 5;
const M = 10;
function fibon(K, F) {
    const f = new Array(K + F - 1)
        .fill(0)
        .map((elem, index, currentArray) => {
        if (index === 0) {
            currentArray[index] = 0;
        }
        else if (index === 1) {
            currentArray[index] = 1;
        }
        else {
            currentArray[index] = currentArray[index - 2] + currentArray[index - 1];
        }
        return currentArray[index];
    });
    const k = f.slice(N - 1);
    return k;
}
console.log(fibon(5, 10));
// 3_1
function fib(n) {
    let a = 0;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}
function createMassive(a, b) {
    const arr1 = [];
    for (let i = a; i < a + b; i++) {
        arr1.push(fib(i));
    }
    return arr1;
}
console.log(createMassive(N, M));
// function findFibonacci (n: number): number // можно еще сделать функцию через рекурсию, но это следующая тема
// {
// if (n == 0)
// return 0;
// if (n == 1)
// return 1;
// return findFibonacci(n - 1) + findFibonacci(n - 2);
// }
// 4
const n1 = 3487;
const n2 = 3794;
function count(a, b) {
    const a1 = a.toString().split('');
    const a2 = b.toString().split('');
    let counter1 = 0;
    let counter2 = 0;
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] === a2[i]) {
            counter1++;
        }
    }
    console.log(`${counter1} - matching position and number`);
    for (const key of a1) {
        for (let i = 0; i < a2.length; i++) {
            if (key === a2[i]) {
                counter2++;
            }
        }
    }
    console.log(`${counter2} - matching number`);
}
count(n1, n2);
// 5
const array1 = [3, 9, 1, 10, -5];
const sortUp = function (arr) {
    return arr.sort((a, b) => a - b);
};
const sortDown = function (arr) {
    return arr.sort((a, b) => b - a);
};
console.log(sortUp(array1));
console.log(sortDown(array1));
// 6
const c = [1, 2, 3, 3, 3, 4, 5, 4, 6];
function getUnique(arr) {
    const result = [];
    for (const value of arr) {
        if (!result.includes(value)) {
            result.push(value);
        }
    }
    return result;
}
console.log(getUnique(c));
