// const grandparent =document.querySelector('.grandparent')
// const parent = document.querySelector('.parent')
// const child = document.querySelector('.child')

// grandparent.addEventListener('click' , e =>
// {
//     console.log("Grandparent 1")
// })

// parent.addEventListener('click' , e=>{
//     console.log("Parent 1")
// })

// child.addEventListener('click', e=>[
//     console.log("Child 1")
// ])

// document.addEventListener('click' , e=>{
//     console.log("Document 1")
// })

const divs = document.querySelectorAll("div")

divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log("Hey")
    })
})

