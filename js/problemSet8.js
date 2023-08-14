/*
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

    tasks.forEach((value , index) => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const span = document.createElement("span");
        p.appendChild(document.createTextNode(`${value.title} - ${value.time}`))
        span.appendChild(document.createTextNode("\u00D7"))
        span.addEventListener("click" , ()=>{
            tasks.splice(index , 1)
            show()
        })
        li.appendChild(p)
        li.appendChild(span)
        list.appendChild(li)

    })
}
*/
const titleEl = document.querySelector("form input[name='title']")
const timeEl = document.querySelector("form input[name='time']")
const tasksContainer = document.querySelector("section")
const formEl = document.querySelector("form")
const tasks = []

const showList = () => {
    if(tasks.length !== 0)
        tasksContainer.style.display = "flex"

    else {
        tasksContainer.style.display = "none"
        return undefined
    }

    while (tasksContainer.firstChild)
        tasksContainer.removeChild(tasksContainer.firstChild)

    for (let i = 0; i < tasks.length; i++) {
        const taskDiv = document.createElement("div")
        const taskTitle = document.createElement("p")
        const taskDate = document.createElement("p")
        const taskDel = document.createElement("button")

        taskDiv.classList.add("task")
        taskTitle.innerHTML = tasks[i].title
        taskDate.innerHTML = tasks[i].time
        taskDel.innerHTML = "Delete"

        taskDel.addEventListener("click", () => {
            tasks.splice(i, 1)
            showList()
        })

        taskDiv.append(taskTitle, taskDate, taskDel)

        tasksContainer.appendChild(taskDiv)
    }

    formEl.reset()
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!formEl.checkValidity())  {
        formEl.reportValidity()
        return undefined
    }

    if (titleEl.value.length < 5 && titleEl.value.length > 30) {
        alert("Title is incorrect!")
        return undefined
    }

    tasks.push({title: titleEl.value, time: timeEl.value})

    showList()
})
