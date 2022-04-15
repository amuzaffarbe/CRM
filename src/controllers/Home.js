const { read } = require("./../lib/FS")
const { verify, sign } = require("jsonwebtoken")

const GET = (req, res) => {
     res.render("index")
}

const POST = (req, res) => {
     const { username, password } = req.body
     const users = read("./../model/users.json")
     const foundUser = users.find(e => e.username == username && e.password == password)

     if (!foundUser) {
          return res.redirect("/")
     }

     res.cookie("token", sign({ id: foundUser.id }, '1Q2W3E4R'))
     res.cookie("username", foundUser.username)
     console.log(req.cookies);
     res.redirect(`/${foundUser.role}`)
}


module.exports = {
     GET,
     POST
}