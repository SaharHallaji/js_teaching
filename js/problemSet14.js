// synchronous js
//console.log("H")
//console.log("E")
//console.log("L")
//console.log("L")
//console.log("O")

// Asynchronous js
//console.log("\n")
//console.log("H")
//console.log("E")


// setTimeout(()=>{
//     console.log("L")
// }, 1000)

//console.log("L")
//console.log("O")


// call backs
//console.log("start")
function one(fun_tow){
    //console.log("function 1 completed , executing function 2 ...")
    fun_tow()
}
//console.log("end")
function two(){
    //console.log("function 2!")
}
one(two)

// arrow functions
let stocks = {
    fruits : [
        "strawberry" , "grapes" , "banana" , "apple"
    ],
    liquid : [
        "water", "ice"
    ],
    holder : [
        "cone" , "cup" , "peanuts"
    ],
    toppings : [
        "Chocolate"
    ]
}


let order = (fruit_name , call_production)=>{
    // setTimeout(()=>{
    //     console.log(`${stocks.fruits[fruit_name]} was selected`)
    //     call_production()
    // }, 2000)
    //console.log("order executed , calling production ...")

}
// callback hell

let production = ()=>{
    // setTimeout(()=>{
    //     console.log("production has started!")
    //     setTimeout(()=>{
    //         console.log("the fruit has been chopped")
    //         setTimeout(()=>{
    //             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
    //             setTimeout(()=>{
    //                 console.log("the machine was started")
    //                 setTimeout(()=>{
    //                     console.log(`ice cream was placed on ${stocks.holder[0]} was selected!`)
    //                     setTimeout(()=>{
    //                         console.log(`${stocks.toppings[0]} was added ad toppings`)
    //                         setTimeout(()=>{
    //                             console.log(`serve the ice cream!`)
    //                         },2000)
    //                     },3000)
    //                 },2000)
    //             })
    //         },1000)
    //     },2000)
    // },0)
    //console.log("executing production...")
}
order(0,production)

// promises

let is_shop_open = true

/*
let order2 = (time , work)=>{
    return new Promise((resolve , reject)=>{
        if (is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)


        }else{
            reject("our shop is closed!")
        }
    })
}
order2(2000 , ()=> console.log(`${stocks.fruits[0]} was selected!`))
    .then(()=>  order2(1000 , ()=> console.log("production has started !")))
    .then(()=>  order2(1000 , ()=> console.log("the fruit has been chopped")))
    .then(()=>  order2(1000 , ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)))
    .then(()=>  order2(1000 , ()=> console.log("the machine was started")))
    .then(()=>  order2(1000 , ()=> console.log(`ice cream was placed on ${stocks.holder[0]} was selected!`)))
    .then(()=>  order2(1000 , ()=> console.log(`${stocks.toppings[0]} was added ad toppings`)))
    .then(()=>  order2(1000 , ()=> console.log(`serve the ice cream!`)))
    .catch(()=> console.log("customer left"))
    .finally(()=> console.log("end!"))



*/



/*
let order3 = ()=>{
    return new Promise((resolve,reject)=>{
        if (is_shop_open){
            resolve()
        }else {
            reject()
        }
    })
}

*/


let toppings_choice = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(()=> console.log("which topping would you love?"))
        },3000)
    })
}

async function kitchen (){
    console.log("a")
    console.log("b")
    console.log("c")
    await toppings_choice()
    console.log("d")
    console.log("e")
}

kitchen()



console.log("something")






