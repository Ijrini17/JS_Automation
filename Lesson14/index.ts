// 1

const a: number[] = [1, 2, 3, 4, 5, 6];

function rev(arr: number[]): number[] {
  return arr.reverse();
}

console.log(rev(a));

// 2

function getMaxOfArray(arr: number[]) {
  return Math.max.apply(null, arr);
}

console.log(getMaxOfArray(a));

// 2_1

function maxm(arr: number[]): number {
  return Math.max(...arr);
}

console.log(maxm(a));

// 2_2

function maximum(arr: number[]): number {
  const max = arr.reduce((a: number, b: number): number => Math.max(a, b), -Infinity);

  return max;
}

console.log(maximum(a));

// 3

const N: number = 5;

const M: number = 10;

function fibon(K: number, F: number): number[] {
  const f: number[] = new Array(K + F - 1)

    .fill(0)

    .map((elem, index, currentArray) => {
      if (index === 0) {
        currentArray[index] = 0;
      } else if (index === 1) {
        currentArray[index] = 1;
      } else {
        currentArray[index] = currentArray[index - 2] + currentArray[index - 1];
      }

      return currentArray[index];
    });

  const k: number[] = f.slice(N - 1);

  return k;
}

console.log(fibon(5, 10));

// 3_1

function fib(n: number) {
  let a: number = 0;

  let b: number = 1;

  for (let i: number = 3; i <= n; i++) {
    const c: number = a + b;

    a = b;
    b = c;
  }

  return b;
}

function createMassive(a: number, b: number): number[] {
  const arr1: number[] = [];

  for (let i: number = a; i < a + b; i++) {
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

const n1: number = 3487;
const n2: number = 3794;

function count(a: number, b: number) {
  const a1: string[] = a.toString().split('');
  const a2: string[] = b.toString().split('');

  let counter1: number = 0;
  let counter2: number = 0;

  for (let i: number = 0; i < a1.length; i++) {
    if (a1[i] === a2[i]) {
      counter1++;
    }
  }

  console.log(`${counter1} - matching position and number`);

  for (const key of a1) {
    for (let i: number = 0; i < a2.length; i++) {
      if (key === a2[i]) {
        counter2++;
      }
    }
  }

  console.log(`${counter2} - matching number`);
}

count(n1, n2);

// 5

const array1: number[] = [3, 9, 1, 10, -5];

const sortUp = function (arr: number[]) {
  return arr.sort((a, b) => a - b);
};

const sortDown = function (arr: number[]) {
  return arr.sort((a, b) => b - a);
};

console.log(sortUp(array1));
console.log(sortDown(array1));

// 6

const c = [1, 2, 3, 3, 3, 4, 5, 4, 6];

function getUnique(arr: number[]): number[] {
  const result: number[] = [];

  for (const value of arr) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

console.log(getUnique(c));
