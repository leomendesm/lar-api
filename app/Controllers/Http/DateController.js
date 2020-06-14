'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with dates
 */
const Dates = use('App/Models/Date')
class DateController {
  async store ({ request, response, auth }) {
    try {
      const user = await auth.getUser()
      const data = request.only(['data']);
      await data.map(async (d) => {
         await Dates.create({userId: user.id, who: d.who, birth: d.when})
      })
      return true;
    } catch (error) {
      response.send('You are not logged in')
    }

  }
}

module.exports = DateController
