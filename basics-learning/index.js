//If the result is number then it is shown in blue color.
//If the result is string the it is shown in black number

//console.log("Hello World", 6+4, "6"+"4");
//alert("Hello");

//Helps to write in screen
//document.write("Hello THis helps to write");

// JS console API
//console.warn("This is a warning");
//console.error("THis helps to shows as an error");
   

//1. JS Variables
//Container to store data values 
var num1=43;
var num2=22;
console.log(num1 + num2);

//2. Data Types in JS
var str1="This is a string";
var str2="This is a second string";
// console.log(str1);
// console.log(str2);

//3. Objects
var arr = {
    ravi: 34,
    ram: 22,
    hari: 33
}
// console.log(arr);

//4. Boolean
var a=true;
var b=false;
// console.log(a,b);


var und = undefined;
// OR var und;
// console.log(und);

var n=null;
// console.log(n);



/*Data Types
a. Primitive Data types
  undefined,variables,null,number,string,boolean,symbol
b.Reference Data Types
  Arrays and Objects
*/

//Arrays
var arrays = [2,3,4,5,6,7,8];
// console.log(arrays);
//console.log(arrays[3] = 5)

//We can also put the strings in arrays
var arra = [2,4,5,"ARN",4,5];
// console.log(arra);

//Operators 
var a = 33;
var b =22;
// 1. Arithmetic Operators
//  +,-,*,/

//2 . Assignment Operators
//var c = b;
// c +=2;
// c -=2;
// c *=2;
// c /=2;

var x=22;
var y=32;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);


//Logical Operators 
console.log(true && true);
console.log(true || true);
console.log(!true);


//Function in JavaScript
//DRY = Do Not Repeat yourself


function avg(a,b)
{
  return (a+b)/2;
}
c1 = avg(4,6);
c2 = avg(6,10);
console.log(c1,c2);

//Conditional in JavaScript
//If-else ladder
//var age = 1;
// if (age>=18)
// {
//   console.log('You are adult now');
// }

// else{
//   console.log('You are still a child');
// }

//Loop
//1. For Loop

let ar=[1,2,3,4,5,6];
console.log(ar);
 console.log(ar.length);
 ar.push("hello","high");
 console.log(ar);
 ar.pop();
 ar.shift();
 console.log(ar);
 console.log(ar.unshift(3));
 console.log(ar.sort());

// for(i=0;i<arr.length;i++)
// {
//   console.log(arr[i]);
// }

// arr.forEach(function(element){
//   console.log(element);
// })

// let j=0;//It is used for memory management(Scope only for curly start and end of a function)
// const a=0;//Cannot be changed


let mydate = new Date();
console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth());// Start with 0 i.e January=0
// console.log(mydate.getDay());


//DOM(Document Object Model)
let elem = document.getElementById('click');
console.log(elem);

let elems = document.getElementsByClassName('container');
console.log(elems);
//elems[0].style.background = "yellow"; 
elems[1].style.border = "5px solid red";
elems[0].classList.add("text-success");
console.log(elems[1].innerHTML);
console.log(elems[1].innerText);
tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');//to add new element like paragraph
createdElement.innerText=("this is so lazy thing to do");
tn[0].appendChild(createdElement);
creatednewelement=document.createElement('b');
creatednewelement.innerText="this is a silly thing";
tn[0].replaceChild(creatednewelement,createdElement);
tn[0].removeChild(creatednewelement);

//Selecting using Querry

//Events in JavaScript

function Clicked(){
  console.log("THE BUTTON WAS CLICKED");
}



//ARROW FUNCTION
AITION = (a,b,c)=>{
  return a+b+c;
}

//SETTIMEOUT
//TO set the time to appear 
chngeit = ()=>{
   document.querySelectorAll('.container')[0].innerHTML="<b>Hello Something good is going on</b>";
  console.log("Let's Dance");
  }

clr=setTimeout(chngeit,5000);
//use clearTimeout/clearInterval to cancel Timeout or interval
//clr1=setInterval(chngeit,5000);


//JavaScript localStorage

