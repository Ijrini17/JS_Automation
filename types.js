let a = "str"
let b = false
let c = 45
 
//сложение
console.log(a+b) //strfalse
console.log(a+c) //str45
console.log(b+c) //45
 
// умножение
console.log(a*b) //NaN
console.log(a*c) //NaN
console.log(b*c) //0
 
// деление
console.log(a/b) //NaN
console.log(a/c) //NaN
console.log(b/c) //0
 
// явное преобразование типов
 
let s1 = String(true) 
console.log(s1, typeof s1) //true              
let s2 = String(-12.3)
console.log(s2, typeof s2) //-12.3            
let s3 = String(null)   
console.log(s3, typeof s3) //null          
let s4 = String(undefined)   
console.log(s4, typeof s4) //undefined                
let s5 = String({})
console.log(s5, typeof s5) //[object Object]
let s6 = String(Symbol("id"))
console.log(s6, typeof s6)  //Symbol(id)
 
let n = 34
let s = n.toString()
console.log(s, typeof s)  //34
 
let bool = true;
let ss = bool.toString()
console.log(ss, typeof ss) //true
 
let cars = ["Saab", "Volvo", "BMW"]
let str = cars.toString()
console.log(str, typeof str) //Saab,Volvo,BMW
let stg = cars.join("/")
console.log(stg, typeof stg) //Saab/Volvo/BMW

 
let n1 = Number ("-65.8")
console.log(n1, typeof n1) //-65.8
let n2 = Number (null)
console.log(n2, typeof n2) //0
let n3 = Number(undefined) 
console.log(n3, typeof n3) //NaN
let n4 = Number(true) 
console.log(n4, typeof n4) //1
let n5 = Number(false)           
console.log(n5, typeof n5) //0
let n6 = Number(" 12 ") 
console.log(n6, typeof n6) //12
let n7 = Number("\n")  
console.log(n7, typeof n7)  //0             
let n8 = Number(" 12s ") 
console.log(n8, typeof n8) //NaN             
let n9 = Number(123) 
console.log(n9, typeof n9) //123
let n10 = Number({}) 
console.log(n10, typeof n10) //NaN
let n11 = Number('324e-1') 
console.log(n11, typeof n11) //32.4
let n12 = Number('hello') 
console.log(n12, typeof n12) //NaN
 
let m = parseInt("-32.6", 10)
console.log(m, typeof m) //-32

let p = parseFloat("20.01");
console.log(p, typeof p); // 20.01

let k = +"20.01";
console.log(k, typeof k); // 20.01

let l = Math.floor("20.01");
console.log(l, typeof l); // 20

let q = Math.ceil("20.01");
console.log(q, typeof q); // 21
 
//false
let b1 = Boolean('')
console.log(b1, typeof b1)           
let b2 = Boolean(0)                
console.log(b2, typeof b2) 
let b3 = Boolean(NaN)          
console.log(b3, typeof b3) 
let b4 = Boolean(null)         
console.log(b4, typeof b4) 
let b5 = Boolean(undefined)    
console.log(b5, typeof b5) 
let b6 = Boolean(false) 
console.log(b6, typeof b6) 
 
//true
let b7 = Boolean({})
console.log(b7, typeof b7)             
let b8 = Boolean([])  
console.log(b8, typeof b8)           
let b9 = Boolean(Symbol()) 
console.log(b9, typeof b9)      
let b10 = Boolean(-76)    
console.log(b10, typeof b10)           
let b11 = Boolean(function() {}) 
console.log(b11, typeof b11)