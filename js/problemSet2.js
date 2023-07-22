const data = [
    {
        id: "0",
        name: "Blue T-shirt",
        price: 15000,
        discount: false,
    },
    {
        id: "1",
        name: "Red T-shirt",
        price: 20000,
        discount: false,
    },
    {
        id: "2",
        name: "Green T-shirt",
        price: 30000,
        discount: true,
    },
    {
        id: "3",
        name: "Yellow T-shirt",
        price: 50000,
        discount: true,
    },
    {
        id: "4",
        name: "Purple T-shirt",
        price: 60000,
        discount: true,
    },
    {
        id: "5",
        name: "Dark Blue T-shirt",
        price: 10000,
        discount: false,
    }
]
let price = null;
const result = document.querySelector("p");
/*
function filterData(){
    result.innerHTML = "";
    price = parseInt(document.querySelector('input').value)
    if (data.length !== 0){
        for (let i=0; i < data.length; i++){
            if (data[i].price <= price) result.innerHTML += data[i].id + " " + data[i].name + data[i].price + "<br>"
        }
    }else{
        result.innerHTML = "array is empty!"
    }
}

*/

function filterData(){
    result.innerHTML = "";
    price = parseInt(document.querySelector('#price').value)
    if (data.length !== 0){
        data.forEach((value)=>{
            if (value.price <= price) {
                result.innerHTML += value.id + " " + value.name + value.price + "<br>"
            }
        })
    }else{
        result.innerHTML = "array is empty!"
    }
}