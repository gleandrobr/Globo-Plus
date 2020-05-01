'use strict'

const User = use('App/Models/User')

class UserController {

  async register({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)
    return user
  }

  async login({ request, auth }) {
    const { email, password } = request.all()
    let result = await auth.attempt(email, password)

    return result
  }

  async list({ request }) {
    let users = User.query().fetch()

    return users
  }

}

module.exports = UserController
