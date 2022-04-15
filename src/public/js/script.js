let teachersBtn = document.getElementById("teachers-btn")
let studentsBtn = document.getElementById("students-btn")
let groupsBtn = document.getElementById("groups-btn")
let coursesBtn = document.getElementById("courses-btn")

let teachersList = document.querySelector(".teachers-list")
let studentsList = document.querySelector(".students-list")
let groupsList = document.querySelector(".groups-list")
let coursesList = document.querySelector(".courses-list")


teachersBtn.addEventListener("click", () => {
    teachersList.classList.remove("none")
    studentsList.classList.add("none")
    groupsList.classList.add("none")
    coursesList.classList.add("none")
})

studentsBtn.addEventListener("click", () => {
    teachersList.classList.add("none")
    studentsList.classList.remove("none")
    groupsList.classList.add("none")
    coursesList.classList.add("none")
})

groupsBtn.addEventListener("click", () => {
    teachersList.classList.add("none")
    studentsList.classList.add("none")
    groupsList.classList.remove("none")
    coursesList.classList.add("none")
})

coursesBtn.addEventListener("click", () => {
    teachersList.classList.add("none")
    studentsList.classList.add("none")
    groupsList.classList.add("none")
    coursesList.classList.remove("none")
})


let addTeacher = document.querySelector("#add-teacher")
let modal = document.querySelector(".modals")
let close = document.querySelector(".close-btn")

addTeacher.addEventListener("click", () => {
    modal.classList.add("show")
})

close.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.remove("show")
})



let addStudent = document.querySelector("#add-student")
let modals = document.querySelector(".modals-s")
let closes = document.querySelector(".closes-btn")

addStudent.addEventListener("click", () => {
    modals.classList.add("show")
})


closes.addEventListener("click", (e) => {
    e.preventDefault()
    modals.classList.remove("show")
})


let addGroup = document.querySelector("#add-group")
let modalsG = document.querySelector(".modals-g")
let closesG = document.querySelector(".closeG-btn")

addGroup.addEventListener("click", () => {
    modalsG.classList.add("show")
})


closesG.addEventListener("click", (e) => {
    e.preventDefault()
    modalsG.classList.remove("show")
})


let addCourse = document.querySelector("#add-course")
let modalsC = document.querySelector(".modals-c")
let closesC = document.querySelector(".closesC-btn")

addCourse.addEventListener("click", () => {
    modalsC.classList.add("show")
})


closesC.addEventListener("click", (e) => {
    e.preventDefault()
    modalsC.classList.remove("show")
})


let logout = document.getElementById("logout")
logout.addEventListener("click", () => {
    var c = document.cookie.split("; ");
    for (i in c)
        document.cookie = /^[^=]+/.exec(c[i])[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.reload()
})


const teacher = document.getElementById("teacher");
const groups = document.querySelector(".chooseGroup");

const changed = (e) => {
    let value = e.options[e.selectedIndex].value
    teacher.innerHTML = ""
    fetch('http://localhost:9000/teachers').then(e => e.json())
        .then(teachers => {
            teachers.map(el => {
                if (el.course == value) {
                    let option = document.createElement("option");
                    option.classList.add("option");
                    option.textContent = el.username
                    option.value = el.username
                    teacher.appendChild(option)
                }
            })
        })
}

const courseChange = (e) => {
    let value = e.options[e.selectedIndex].value
    groups.innerHTML = ""
    fetch('http://localhost:9000/groups').then(e => e.json())
        .then(groups => {
            groups.map(el => {
                if (el.course == value) {
                    let option = document.createElement("option");
                    option.classList.add("option");
                    option.textContent = el.name
                    option.value = el.name
                    group.appendChild(option)
                }
            })
        })
}


let getadmin = document.getElementById("getadmin")

getadmin.addEventListener("click", (e) => {
    e.preventDefault()
    alert("asfafafs")
})