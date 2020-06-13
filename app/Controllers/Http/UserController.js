'use strict'
const User = use('App/Models/User')
class UserController {
  async login ({ request, auth }) {
    const { username, password } = request.all()
    return auth.attempt(username, password)
  }
  async index ({ request, response, view }) {
    return User.all()
  }
  async store ({ request, response }) {
    const data = request.only(['username', 'password', 'cpf', 'cellphone']);
    return User.create(data)
  }
  async show ({ params, request, response, view }) {
    return User.findOrFail(params.id)
  }
  async update ({ params, request, response }) {
    const user = await User.findOrFail(params.id);
    const data = request.only(['username', 'password', 'cpf', 'cellphone']);
    user.merge(data);
    await user.save();
    return user
  }

  async destroy ({ params, request, response }) {
    const driver = await User.findOrFail(params.id)
    await driver.delete()
  }
}

module.exports = UserController

