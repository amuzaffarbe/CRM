const { verify } = require("jsonwebtoken")

const auth = (req, res, next) => {
     const { token } = req.cookies
     verify(token, '1Q2W3E4R', (err, decoded) => {
          if (err) return res.redirect("/")
          next()
     })
     
}

module.exports = {
     auth
}