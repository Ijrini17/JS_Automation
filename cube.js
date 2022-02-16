//задача про кубики

let sum1 = 0
let sum2 = 0

let rand = function (min, max) {
    let b = Math.floor(Math.random() * (max - min + 1) + min)
    return b
}

for (let i = 1; i < 4; i++) {
    let k = rand(1, 6)
    sum1 += k
    let n = rand(1, 6)
    sum2 += n
}

console.log("У первого " + sum1 + "\n" + "У второго " + sum2 + "\n")


if (sum1 > sum2) {
    console.log("Первый победил!")
}
else if (sum1 < sum2) {
    console.log("Второй победил!")
}
else {
    console.log("Ничья!")
}