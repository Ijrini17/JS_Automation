// задача про пятницы 13ое

let date1 = new Date(Date.UTC(2000, 00, 13));
let date2 = new Date();
console.log(date1)
console.log(date2)
let number = 0;

for (date1; date1 < date2; date1.setMonth(date1.getMonth() + 1)) {

    if (date1.getDay() === 5) {
        number += 1
        console.log(date1)
    }
}

console.log(number)
