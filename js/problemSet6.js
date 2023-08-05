/*
function checkValue(element) {
    let result = document.querySelector("p")
    try {
        if(element.value.indexOf("@") === -1)  throw "enter an email please!"
        else result.innerHTML = "no error"
    } catch (err) {
       result.innerHTML = err
    }
}*/

function changeText(){
    let result = document.querySelector("p");
    let color = document.querySelector("#coolor");
    let text = document.querySelector("#text")
    try {
        result.style.color = color.value
        result.innerHTML = text.value
    }catch (err){
        result.innerHTML = err
    }
}
