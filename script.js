let num=document.querySelector("input[name='display']");
let result=document.querySelectorAll("input[type='button']");

result.forEach(relt =>{
    relt.addEventListener("click", ()=>{
        let sto=relt.sto

        if(sto==="Ac"){
            num.sto=""
        }
        else if(sto==="De"){
            num.sto=num.sto.slice(0,-1)
        }
        else if(sto==="="){
            num.sto=eval(num.sto);
        }
        else{
            num.sto+=sto
        }
    })

})