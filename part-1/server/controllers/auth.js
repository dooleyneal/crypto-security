const users = []
bcryptjs = require('bcryptjs')
axios = require('axios')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          const authenticated = bcryptjs.compareSync(password, users[i].password)
          if (authenticated) {
          let returned = {...users[i]}
          delete returned.password
          res.status(200).send(users[i])
          }

        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      let {username, email, firstname, lastname, password} = req.body
      console.log('Registering User')
      console.log(req.body)
      users.push(req.body)
      res.status(200).send(req.body)
      let salt = bcryptjs.genSaltSync(5)
      let hash = bcryptjs.hashSync(password, salt)

      let newUser = {
        username,
        email,
        firstname,
        lastname,
        password: hash
      }

      users.push(newUser)
      let userToReturn = {...newUser}
      delete userToReturn.hash
      res.status(200).send(userToReturn)
    }
}