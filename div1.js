// задача про деление числа, часть 1

let n = 18 //число
let div = 5 //на сколько частей поделить
let a = []
let rand = function (min, max) {
    let b = Math.floor(Math.random() * (max - min + 1) + min)
    return b
}

let func1 = function () {
    for (i = 1; i < div; i++) {
        let c = rand(0, n)
        a.push(c)
        n -= c
    }
    a.push(n)
}

func1()
console.log(a)