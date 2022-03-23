class Salad {
    constructor() {
        this.salad = []
    }
 
    addVegetable(vegetable)
    {
        this.salad.push(vegetable)
    }
 
    calculateCalories() {
        let cal = 0
        for (let i = 0; i < this.salad.length; i++) {
            cal += this.salad[i].calories
        }
        console.log(cal)
    }
 
    sortSaladbyNumericField(field) {
        let sorted = this.salad.sort((a, b) => { return b[field] - a[field] })
        console.log(sorted)
    }
 
    sortSaladbyName() {
        let sorted = this.salad.sort(function (a, b) {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        console.log(sorted)
 
    }
 
}
 
class Vegetable {
    constructor(name, type, amount, calory) {
        this.name = name
        this.type = type
        this.amount = amount
        this.calories = calory * amount
    }
    sayName() {
        console.log(`Vegatable name is ${this.name}`)
    }
 
}
 
class PerishableVeg extends Vegetable {
    constructor(name, type, amount, calory, color, origin, freshness_in_days) {
        super(name, type, amount, calory)
        this.color=color
        this.origin=origin
        this.freshness_in_days = freshness_in_days
    }
}
 
class Pepper {
    constructor() {
        this.name = "pepper"
        this.type = "tomato"
        this.origin = "Bulgary"
    }
}
 
class PepperBiulder {
 
    constructor() { this.pepper = new Pepper() }
 
    setAmount(amount) {
        this.pepper.amount = amount
        return this
    }
    setCalory(calory) {
        this.pepper.calories = calory * this.pepper.amount
        return this
    }
    setColor(color) {
        this.pepper.color = color
        return this
    }
    build() {
        return this.pepper
    }
}
 
let salad = new Salad()
salad.addVegetable(new Vegetable("cucumber", "pumpkin", 2, 14)) 
salad.addVegetable(new PerishableVeg("tomato", "tomato", 3, 20,"red", "Belarus", 7))
salad.addVegetable(new Vegetable("onion", "onion", 0.5, 43))
salad.addVegetable(new PepperBiulder().setAmount(1).setCalory(54).setColor("yellow").build())
salad.addVegetable(new PepperBiulder().setAmount(2).setCalory(54).setColor("red").build())
salad.addVegetable(new Vegetable("cabbage", "cabbage", 0.5, 246))
salad.addVegetable(new PerishableVeg("parsley", "spicy", 1, 10, "green", "Belarus", 2))
 
salad.calculateCalories()
salad.sortSaladbyNumericField("calories")
salad.sortSaladbyName()

 
// 2 https://javascript.ru/tutorial/object/inheritance#factory
 
function vegetable1(name, color, amount, calory, smell) {
    return {
        name: name,
        color: color,
        amount: amount,
        calories: amount * calory,
        smell: smell,
        smell1: function () {
            return this.smell
        }
    }
}
 
function vegetable2(name, color, amount, calory, smell, size) {
 
    let vegetable = vegetable1(name, color, amount, calory, smell)
    vegetable.size = size
    vegetable.getSize = function () { return vegetable.size }
    vegetable.constructor = arguments.callee
    return vegetable
 
}
 
let pepper = vegetable2("pepper", "red", 2, 54, "nice", "big")
console.log(pepper)
 
//3
function Parent(name) {
    this.name = name || 'tomato';
}
Parent.prototype.say = function () {
    return this.name;
 
}
 
function Child(name, calory) {
    Parent.apply(this, arguments);
    this.calory = calory
}
Child.prototype = new Parent();
 
var veg = new Child('pepper', 54);
console.log(veg.name)
 
// 4
function extend(Child, Parent) {
    var F = function () { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}
 
function Vegetable3(name) {
    this.name = name
    this.getAmount = function (amount) {
        return this.amount = amount
    }
}
 
function Vegetable4(name, calory) {
    Vegetable4.superclass.constructor.call(this, name)
    this.calory = calory
    this.sayName1 = function () {
        return this.name
    }
}
 
extend(Vegetable4, Vegetable3)
 
vegg = new Vegetable4("onion", 15)
console.log(vegg.sayName1())
console.log(vegg.getAmount(3))
console.log(vegg)