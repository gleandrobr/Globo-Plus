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

  async check_login({ response, auth }) {
    try {
      await auth.check()

      response.send({ valid: true })
    } catch(error) {
      response.send({ valid: false })
    }
  }

  async add_favorites({ request, response, auth }) {
    const data = request.only(['favorites_choices'])

    if(data['favorites_choices'] == undefined)
      return { successfully: false }

    let user = null
    try {
      user = await auth.getUser()
    } catch(error) {
      return { invalid_token: true }
    }

    let final = {}
    for(let i of data['favorites_choices']) {
      final[i] = []
    }

    try {
      user.preferences = final
      user.save()
    } catch(error) {
      return { successfully: false }
    }
    response.send({ successfully: true })
  }
}

module.exports = UserController
