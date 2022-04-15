const express = require("express")
const app = express()
const path = require("path")
const cookieParser = require("cookie-parser")
const { auth } = require("./controllers/auth")

const Home = require("./controllers/Home")
const Admin = require("./controllers/Admin")
const Teacher = require("./controllers/Teacher")
const Student = require("./controllers/Student")

app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./views"))

// GET
app.get("/", Home.GET)
app.get("/admin", auth, Admin.GET)
app.get("/teacher", auth, Teacher.GET)
app.get("/student", auth, Student.GET)

// fetchs
app.get("/groups", auth, Admin.groups)
app.get("/teachers", auth, Admin.teachers)

// POST
app.post("/", Home.POST)
app.post("/admin", Admin.TeacherPOST)
app.post("/adminS", Admin.StudentPOST)
app.post("/adminG", Admin.GroupPOST)
app.post("/adminC", Admin.CoursePOST)


app.listen(9000, console.log(9000))