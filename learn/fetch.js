fetch('https://reqres.in/api/users',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        name:'User suman'

    })
})
// .then(res => console.log(res))
.then(res => {
    if(res.ok)
    {
        console.log("SuccessFull")
    }
    else{
        console.log("Not successfull")
    }
 } )
.then(data => console.log(data))
.catch(error => console.log('ERROR'))