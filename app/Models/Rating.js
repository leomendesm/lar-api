'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rating extends Model {
  static get hidden () {
    return ['placeId', 'created_at', 'updated_at', 'id']
  }
}

module.exports = Rating
