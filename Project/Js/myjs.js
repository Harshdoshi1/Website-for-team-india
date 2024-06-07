
// let firstName = "harsh";
// let age = 20;
// let student = true;

// let = a variable name can be asigned once
// var = means variable name can be asigned multiple times
// const = meants constant a variable name can be asigned once 
// and its value can be chanaged , can be used for pi etc 

//-------------------------------------------------------------

// //how to print in js 

// console.log("hello my name is",firstName);
// console.log("my age is",age);

//-------------------------------------------------------------

// // how to add text in html using js

// document.getElementById("p1").innerHTML =  firstName + " hello";

//-------------------------------------------------------------

// // how to add value in js variable from html 
// let username;

// document.getElementById("button").onclick = function(){
//     username = document.getElementById("mytext").value 
//     console.log(username); 
// }

//-------------------------------------------------------------

// // type conversion

// let x;
// let y;
// let z;

// x = Number("harsh"); //string to number
// y = String(3.24); // number to string
// z = Boolean(""); // string to boolean

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//-------------------------------------------------------------

// // q 1 find circumference of circle 2*pi*rad

// const pi = 3.14;
// let rad;

// rad = window.prompt("enter the radius :");
// rad = Number(rad);

// circumference = 2*pi*rad;

// console.log("circumference is :",circumference);

//-------------------------------------------------------------

// // math functions

// v = 3.14;

// console.log(Math.floor(v));
// console.log(Math.max(v));
// console.log(Math.ceil(v));
// console.log(Math.round(v));
// console.log(Math.pow(v,2));
// console.log(Math.sqrt(v));
// console.log(Math.abs(v));

//-------------------------------------------------------------

// counter using js

let count;

document.getElementById("increase").onclick = function(){
    count += 1;
    count = document.getElementById("num").innerHTML = count;
}
document.getElementById("decrease").onclick = function(){
    count -= 1;
    count = document.getElementById("num").innerHTML = count;
}
document.getElementById("reset").onclick = function(){
    count = 0;
    count = document.getElementById("num").innerHTML = count;
}

// simple if else 

let age = 18;