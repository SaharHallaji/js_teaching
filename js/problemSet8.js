const tasks = []
const err = document.querySelector("p")
const list = document.querySelector("ul")
const add = () => {
    const title = document.querySelectorAll("input")[0]
    const time = document.querySelectorAll("input")[1]
    if (title.value.length > 5) {
        if (time.value.length === 5) {
            err.innerHTML = ""
            tasks.push({title: title.value, time: time.value})
        } else err.innerHTML = "enter a specific time for the task"
    } else err.innerHTML = "task title should contain at least 5 character"
    show()
    title.value = ""
    time.value = ""
}
const show = () => {
    while (list.firstChild) list.removeChild(list.firstChild);

    tasks.forEach((value) => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const span = document.createElement("span");
        p.appendChild(document.createTextNode(`${value.title} - ${value.time}`))
        span.appendChild(document.createTextNode("\u00D7"))

        li.appendChild(p)
        li.appendChild(span)
        list.appendChild(li)

    })
}

/*
const remove = (event) => {

}*/
