// задача про деление числа, часть 2

let n = 18 //число
let div = 5 //на сколько частей поделить
let a = []
let rand = function (max) {
    let b = Number((Math.random() * max).toFixed(2))
    return b
}
let func2 = function () {
    for (i = 1; i < div; i++) {
        let c = rand(n)
        a.push(c)
        n -= c
    }
    a.push(Number(n.toFixed(2)))
}

func2()
console.log(a)
