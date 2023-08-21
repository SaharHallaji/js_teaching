const answers = ["ok" , "great" , "I dont know!" , "yes" , "no" , "maybe" , "bye"]
const result = document.querySelector("p")
const ask = (target)=>{
    if (target.value.indexOf("?")){
        target.style.borderColor = "green"
        result.innerHTML = "thinking..."
        setTimeout(()=>{
            result.innerHTML = answers[Math.floor(Math.random() * answers.length)]
        },2000)
    }else {
        target.style.borderColor = "red"
    }
}