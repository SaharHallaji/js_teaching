const numbers = []
const name = document.querySelector("input[name = 'phone_number']")
const phoneNumber = document.querySelector("input[name ='name']")
const result = document.querySelector("p")

const add = () => {
    if (name.value.length > 3) {
        if (phoneNumber.value.indexOf("+98") === 0) {
            numbers.push({name: name.value, phoneNumber: phoneNumber.value})
        } else if (phoneNumber.value.indexOf("0") === 0) {
            numbers.push({name: name.value, phoneNumber: phoneNumber.value.replace("0", "+98 ")})
        } else if (phoneNumber.value.indexOf("9") === 0) {
            numbers.push({name: name.value, phoneNumber: "+98 " + phoneNumber.value})
        }else alert("Please enter a valid number!")
    } else alert("Enter a name and a number please")
    show()
}
const show = () => {
    result.innerHTML = ""
    for (let i = 0; i < numbers.length; i++) {
        result.innerHTML += `${i + 1} - ${numbers[i]["name"]} : ${numbers[i]["phoneNumber"]} <button onclick="remove(${i})"> x </button> <br>`
    }
}

const remove = (index) => {
    numbers.splice(index, 1)
    show()
}