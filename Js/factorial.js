let btn = document.getElementById("submit")
let result = document.getElementsByClassName("show-result")[0]

const fact = (x) =>{
    let i = 1;
    for(;x>=1;x--){
        i*=x;
    }
    return i;
}

btn.addEventListener("click", () => {
    let num = Number.parseInt(document.getElementsByName("number")[0].value)
    if(isNaN(num)){
        result.innerHTML = "Invalid"
    }
    else{
        result.innerHTML = `= ${fact(num)}`;
    }
})