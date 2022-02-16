// задача про деление числа, часть 2

let n = 18 //число
let div = 5 //на сколько частей поделить
let a = []
let rand = function (min, max) {
    let b = (Math.random() * (max - min + 1) + min).toFixed(2)
    return b
}
let func2 = function () {
    for (i = 1; i < div; i++) {
        let c = rand(0, n - 1)
        a.push(c)
        n -= c
    }
    a.push(n.toFixed(2))
}

func2()
console.log(a)