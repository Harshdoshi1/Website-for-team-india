
let firstName = "harsh";
let age = 20;
let student = true;

console.log("hello my name is",firstName);
console.log("my age is",age);

document.getElementById("p1").innerHTML =  firstName + " hello";

let username;

document.getElementById("button").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
}