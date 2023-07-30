const numbers = [1, 2, 3, 4, 5, 6, 7] , result = document.querySelector('p');
let index = null;
const linearSearch = (value) => {
    index = -1;
    for (let i= 0 ; i < numbers.length ; i++){
        if (numbers[i] === value) index = i;
    }
    (index===-1) ? result.innerHTML = `${value} does not exist in array` : result.innerHTML = `index of ${value} in array is ${index}`
}