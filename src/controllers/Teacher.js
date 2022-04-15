const { read, write } = require("./../lib/FS")
const path = require("path")

const GET = (req, res) => {
     const users = read("users.json")
     const groups = read("groups.json")
     const { username } = req.cookies

     const foundUser = users.find(e => e.username == username)

     const group = []
     groups.map(e => {
          if (e.teacher == username) {
               group.push(e)
          }
     })
     

     console.log(foundUser);

     const students = []
     users.map(e => {
          if (e.course == foundUser.course && e.role == "student") {
               students.push(e)
          }
     })



     res.render("teacher", { students: students, groups: group, foundUser: foundUser })
}

module.exports = {
     GET
}