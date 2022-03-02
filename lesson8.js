//1
function makeCounter() {
    let count = 1;

    return function () {
        console.log(count++)
    };
}

let counter = makeCounter();
counter()
counter()
counter()

//2

function generateNumbers(number) {
    let arr = []

    function createMassive() {
        while (arr.length < number) {
            let a = Math.floor(Math.random() * (number) + 1)
            if (!arr.includes(a)) { arr.push(a) }

        }
        return arr
    }
    return createMassive
}

let generator = generateNumbers(100)
console.log(generator())


//3
arr = [1, -2, 3, 0, 4, -5, 6, -11]

function takeSqrtofPositiveArray(ar) {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > 0) { arr1.push(arr[i]) }
    }
    return arr2 = arr1.map(element => { return Math.sqrt(element) });
}
console.log(takeSqrtofPositiveArray(arr))

//4

function logNumbers(ar) {
    console.log(ar[0])
    ar.shift()
    if (ar.length > 0) { logNumbers(ar) }
}
logNumbers(arr)

//5
let c = 23477

function summarizeNumbers(number) {

    let arr = number.toString().split("")
    let arr1 = arr.map(element => { return Number(element) });
    let sum = arr1.reduce((a, b) => a + b)
    if (sum <= 9) {
        return sum
    }
    return summarizeNumbers(sum)

}

console.log(summarizeNumbers(c))