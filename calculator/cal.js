let string="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else{
        string=string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
        
        }
    )
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == 'Back'){
            string=string.slice(0, -1);
            document.querySelector('input').value=string;

        }
    })
})