'use strict'

const Rating = use('App/Models/Rating')

class RatingController {
  async store ({ request, response, auth }) {
    const user = await auth.getUser()
    const data = request.only(['placeId', 'rating']);
    return Rating.create({userId: user.id, ...data})
  }
  async ranking ({ request, response }) {
    return Rating.query().select('userId').orderBy('total','desc').limit(10).groupBy('userId').count('* as total')
  }
}

module.exports = RatingController
