'use strict'

const Rating = use('App/Models/Rating')

class RatingController {
  async store ({ request, response }) {
    const data = request.only(['userId', 'placeId', 'rating']);
    return Rating.create(data)
  }
  async ranking ({ request, response }) {
    return Rating.query().select('userId').orderBy('total','desc').limit(10).groupBy('userId').count('* as total')
  }
}

module.exports = RatingController
