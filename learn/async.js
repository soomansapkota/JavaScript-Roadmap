// async function suman(){
//     return 5
// }

// suman().then((x)=>alert(x))

// async function myFunction()
// {
//    let mypromise = new Promise(function(resolve,reject){
//     resolve("I love you");
//    });
   
// document.getElementById("demo").innerHTML = await mypromise;  
// }
// myFunction();


function myScript(some)
{
    document.getElementById("demo").innerHTML = some;

}
async function myFunction(){
    return "Hi THere "
}

myFunction().then(
    function(value)
    {
        myScript(value)

    },
    function(error)
    {
        myScript(error)
        
    }
);