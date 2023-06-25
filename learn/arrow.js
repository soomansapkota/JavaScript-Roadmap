// function sum (a,b)
// {
//     return a + b;
// }

// let sum2 = (a,b) =>{
//     return a+b
// }

// let sum3 = (a, b) => a + b

// function isPositive(number)
// {
//     return number >=0
// }

// let isPositive2 = number => number >= 0

// function randomNumber()
// {
//   return  Math.random()
// }

// let randomNumber2 = () => Math.random()

// document.addEventListener('click',function()
// {
//     console.log('Click')
// })

// document.addEventListener('click' ,() => console.log('click'))


const sayhello = () => console.log("Hello")
sayhello()

// If we need only one parameter then we can use without parenthesis i.e name
const sayhello1 = name => console.log("Hello" + name)
sayhello1("suman")

// If we need more than one parameter then parenthesis is mandotory i.e (name, occupation)
const sayocc = (name,occupation) => console.log("My name is " + name + " and i am a " + occupation)
sayocc("Harry", "Software Engineer")

const x={
    name:"Suman",
    role:"Software Developer",
    experience: 2,
    show: function(){ 
        // let that = this
        setTimeout(() =>{
        // console.log(`The name is ${that.name} \n Role is ${that.role}`)
        console.log(`The name is ${this.name} \n Role is ${this.role}`)
        }
      ,2000 )
}
}

console.log(x.name , x.role, x.experience)
x.show()

