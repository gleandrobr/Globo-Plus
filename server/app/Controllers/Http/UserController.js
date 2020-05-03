'use strict'

const User = use('App/Models/User')

const { CATEGORIES, CATEGORIES_INFO } = require('../../constants')

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

  async get_favorites({ request, response, auth }) {
    let user = null
    try {
      user = await auth.getUser()
    } catch(error) {
      return { invalid_token: true }
    }

    let final = {}
    for(let preference of Object.keys(user.preferences)) {
      final[preference] = CATEGORIES_INFO[preference]
    }

    response.send({ favorites: final })
  }

  async get_categories_options({ request, response, auth }) {
    let user = null
    try {
      user = await auth.getUser()
    } catch(error) {
      return { invalid_token: true }
    }


    let preferences = Object.keys(user.preferences)
    let final = {}

    for(let preference of preferences) {
      final[preference] = CATEGORIES[preference]
    }

    response.send({results: final})
  }

  async set_user_categories_preferences({ request, response, auth }) {
    let data = request.only(['categories'])

    let user = null
    try {
      user = await auth.getUser()
    } catch(error) {
      return { invalid_token: true }
    }

    try {
      user.preferences = data
      user.save()
    } catch(error) {
      return { successfully: false }
    }

    response.send({ successfully: true })
  }
}

module.exports = UserController
