'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Place extends Model {
  rating () {
    return this.hasMany('App/Models/Rating', 'id', 'placeId')
  }
}

module.exports = Place
