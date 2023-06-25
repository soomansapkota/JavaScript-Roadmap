let p = new Promise((resolve, reject) => {
    let a = "Suman"
    let b="Sum"
    let c="an"
    let d="hey"
    if(a === b+c)
    {
        resolve('Success')
    }else{
        reject('Failed')
    }
})
p.then((message) =>{
    console.log('Congratulation ' + message)
}).catch((message) =>{
console.log('Sorry ' + message)

})

// function promiseUser(){
//     return new Promise((resolve,reject)=>
//     {
//         if (userLeft)
//         {
//             reject({
//                 name:'User Left',
//                 message:'Happy'
//             })
//         }
//         else if(userWatchingcatMeme)
//         {
//             resolve({
//                 name:"User Watching meme",
//                 message:'Suman < cat'
//             })
//         }
//         else{
//             resolve('Thumbs up')
//         }
//     })
// }

// promiseUser().then(message)=>{
//     console.log('Success')
// }.catch(reject)=>{
//     console.log(reject.name + '' + reject.message)
// }


const recordvideo = new Promise((resolve, reject)=>{
    resolve('Video 1')
})

const recordvideoone = new Promise((resolve, reject)=>{
    resolve('Video 2')
})

const recordvideotwo = new Promise((resolve, reject)=>{
    resolve('Video 3')
})

Promise.race([
    
    recordvideoone,
    recordvideotwo,
    recordvideo
]).then((message)=>{
console.log(message)
})