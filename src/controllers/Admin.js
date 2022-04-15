const { read, write } = require("./../lib/FS")
const path = require("path")

const GET = (req, res) => {
     const users = read("users.json")
     const groups = read("groups.json")
     const courses = read("courses.json")

     const teachers = []
     users.map(e => {
          if (e.role == "teacher") {
               teachers.push(e)
          }
     })

     const students = []
     users.map(e => {
          if (e.role == "student") {
               students.push(e)
          }
     })


     res.render("admin", { teachers: teachers, students: students, groups: groups, courses: courses })
}


const groups = (req, res) => {
     const groups = read("groups.json")

     res.json(groups)
}

const teachers = (req, res) => {
     const users = read("users.json")

     const teachers = []
     users.map(e => {
          if (e.role == "teacher") {
               teachers.push(e)
          }
     })

     res.json(teachers)
}

const TeacherPOST = (req, res) => {
     const { name, phone, gender, course } = req.body
     const users = read('/users.json')

     const data = 
          {
               id: users.length + 1,
               username: name,
               password: phone,
               role: "teacher",
               phoneNumber: phone,
               gender: gender,
               course: course
          }
     users.push(data)

     write(path.resolve('./src/model/users.json'), users)
     res.redirect("/admin")
}

const StudentPOST = (req, res) => {
     const { name, phone, gender, course, group } = req.body
     const users = read('/users.json')

     const data = 
          {
               id: users.length + 1,
               username: name,
               password: phone,
               role: "student",
               phoneNumber: phone,
               gender: gender,
               course: course,
               group: group
          }
     users.push(data)

     write(path.resolve('./src/model/users.json'), users)
     res.redirect("/admin")
}

const GroupPOST = (req, res) => {
     const { name, teacher, course } = req.body
     const groups = read("groups.json")


     const data = 
          {
               id: groups.length + 1,
               name: name,
               course: course,
               teacher: teacher
          }
     groups.push(data)

     write(path.resolve('./src/model/groups.json'), groups)
     res.redirect("/admin")
}

const CoursePOST = (req, res) => {
     const { name, description, cost } = req.body
     const courses = read("courses.json")


     const data = 
          {
               id: courses.length + 1,
               name: name,
               description: description,
               cost: cost + " so'm"
          }
          courses.push(data)

     write(path.resolve('./src/model/courses.json'), courses)
     res.redirect("/admin")
}


module.exports = {
     GET,
     TeacherPOST,
     StudentPOST,
     GroupPOST,
     CoursePOST,
     groups,
     teachers
}