let numbers = [10,2,8,7,5,6,13,10]

function sort() {
    let temp = null , isSwapped = false
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < (numbers.length - i - 1); j++) {
            if (numbers[j] > numbers[j + 1]) {
                temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped) break
    }
    console.log(numbers.toString())
}
sort()