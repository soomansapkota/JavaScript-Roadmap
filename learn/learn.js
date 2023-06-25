


// let myname="Suman"

// function printName()
// {
//     console.log(myname)

// }
// myname="Sapkota"
// printName()

// myname="High"
// printName()

// Closure
// function outerFunction(outerVariable)
// {


//     return function innerFunction(innerVariable)

//     {
//         console.log('Outer Variable : ' + outerVariable)

//         console.log('Inner Variable : '+ innerVariable)

//     }

// }


// const newFunction = outerFunction('outside')

// newFunction('inner')

// PASS BY VALUE AND PASS BY REFERENCE
// let a=10;
// let b="hI";
// let e=a
// let f=b

// let x=[1,2,3]
// // let y=[1,2,3]
// let y=x
// console.log(`x == y ${x == y}`)
// console.log(`x === y ${x === y}`)
// console.log(a)
// console.log(b)
// console.log(e)
// console.log(f)

// let c=[2,3,4]
// let d=c
// console.log(c)
// console.log(d)
// d.push(5)
// console.log(c)
// console.log(d)

// function PassbyReference(obj){
//     obj = {
//         a:10,
//         b:20,
//         c:"Geeksforgeeks"
//     }
//     console.log(`Inside pass by Reference Function -> obj`)

// console.log(obj)

// }

// let obj ={
//     a:10,
//     b:20
// }

// console.log(`Updating the object reference -> `)
// console.log(`Before calling Pass by reference function -> obj`)
// console.log(obj)
// PassbyReference(obj)
// console.log(`After calling Pass by Reference Function -> obj`)
// console.log(obj)


// function PassbyReference(obj) {

//     // Mutating the original object
//     obj.c = "GEEKSFORGEEKS";
//     console.log(`Inside Pass by
//         Reference Function -> obj `);
//     console.log(obj);
// }

// let obj = {
//     a: 10,
//     b: 20

// }
// console.log(`Mutating the original object -> `)
// console.log(`Before calling Pass By
//         Reference Function -> obj`);
// console.log(obj);

// PassbyReference(obj)
// console.log(`After calling Pass By
//         Reference Function -> obj`);
// console.log(obj);


// DOM manipulation
// createElement helps to add the element in html
// appendChild(it takes only element) or append(it takes element and string) is necessary for createElement

// const body = document.body;
// const div = document.createElement('div');

// const strong = document.createElement("strong");
// strong.innerHTML = "<div>A quick brown fox jumps over the lazy dog2</div>"
// body.append(strong)

//  div.innerHTML ="<h1>Hey you</h1><p><h2><i><u>A quick brown fox jump over the lazy dog."

// body.append(div)


const body = document.body
const div = document.querySelector('div')
const span = document.querySelector('#hi')
const mind = document.querySelector('#mind')
const spanBye = document.querySelector('.bye')

console.log(span.dataset)
console.log(span.dataset.test)
console.log(span.dataset.longerName)
span.dataset.newName = "A quick brown fox jumps over the lazy dog"

mind.classList.add("new_class")
mind.classList.remove("hi2")
mind.classList.toggle("hi1", false)
mind.classList.toggle("hi5", true)

mind.style.color = "skyblue"
span.style.color = "blue"
span.style.fontSize = "24px"
spanBye.style.backgroundColor="red"
spanBye.style.color="white"


// spanBye.remove()

// // Can add from div after removing it
// div.append(spanBye)

// console.log(span.getAttribute('title'))
// console.log(span.setAttribute("title" , "A quick brown fox jumps over the lazy dog 111"))
// span.title = "A quick brown fox jumps over the lazy dog 555"
// span.removeAttribute("title")