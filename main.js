let age;
let userName;
let nameConfirm;
console.log("age is currently: " + age);
age = 24;
console.log("age is currently: " + age)

age = 24 + 1; 
console. log ("age is currently:" + age);

console. log("hello world");

if(5>4) {
    console. log("5 is greater than 4");
}

let acolor = "red";
if ((3>(3-1)&&( acolor != "silver") &&(acolor=="re"+"d")))
{
    console. log("did we make it?");
}
prompt("what is your name");
let con = confirm("Hey"+ userName + "! wanna pick somesnowberries???");

if (con == false){
    let al = alert("you sit on a throne of lies")
}
else{
    console. log("great! let's go")

}
 userName = prompt("what is your name");
let var1 = confirm("just checking, is " + userName +" your real name?");
if(nameConfirm){
   alert("welcome to my page," + userName + "!");
}
else  {
    userName = prompt("okay, what is your name?");
}

console. log("The user's name is " + userName + ".")
