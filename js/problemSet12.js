const numbers = []
const name = document.querySelector("input[name = 'phone_number']")
const phoneNumber = document.querySelector("input[name ='name']")
const result = document.querySelector("p")

const add = () => {
    if (phoneNumber.value.length === 13 && name.value.length > 5) {
        if (phoneNumber.value.indexOf("+98") === 0) {
            numbers.push({name: name.value, phoneNumber: phoneNumber.value})
        } else alert("enter a number witch begins with +98")
    } else alert("enter a name and a number please")
    show()
}
const show = () => {
    result.innerHTML = ""
    for (let i = 0; i < numbers.length; i++) {
        result.innerHTML += `${i + 1} - ${numbers[i]["name"]} : ${numbers[i]["phoneNumber"]} <span onclick="remove(${i})"> x </span>`
    }
}

const remove = (index)=>{
    numbers.splice(index , 1)
    show()
}