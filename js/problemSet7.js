const items = new Map();
const regex = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")
const add = ()=>{
    const title = document.querySelectorAll("input")[0].value
    const password = document.querySelectorAll("input")[1].value
    const result = document.querySelector("p")
    if (regex.test(password)) {
        result.innerHTML = "Safe!"
        result.style.color = "green"
    }else {
        result.innerHTML = "NOT Safe!"
        result.style.color = "red"
    }
    items.set(title ,password)
}
const show = ()=>{
    const list = document.querySelector("ul")
    list.replaceChildren()
    items.forEach((value, key)=>{
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`title : ${key} - password: ${value}`));
        list.appendChild(li);
    })
}