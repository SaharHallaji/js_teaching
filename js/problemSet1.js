const fruits = ["apple" , "banana" , "orange" , "kiwi" , "cherry" , "mango"]
let counter = 0 ;
if (fruits.length > 0){
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].indexOf("a") !== -1 ) counter ++;
    }
    console.log(counter)
}else console.log("The Array Is Empty!")


// -------------------------------------------------------------------------------