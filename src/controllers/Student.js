const { read, write } = require("./../lib/FS")
const path = require("path")

const GET = (req, res) => {
     const users = read("users.json")
     const groups = read("groups.json")
     const { username } = req.cookies

     const foundUser = users.find(e => e.username == username)

     const group = []
     groups.map(e => {
          if (e.course == foundUser.course && e.name == foundUser.group) {
               group.push(e)
          }    
     })

     res.render("student", {groups: group, foundUser: foundUser })
}

module.exports = {
     GET
}