'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaceSchema extends Schema {
  up () {
    this.create('places', (table) => {
      table.increments('id')
      table.timestamps()
      table.string('name', 100)
      table.string('googleId', 100)
      table.string('query', 100)
      table.string('image', 200)
      table.string('type', 100)
    })
  }

  down () {
    this.drop('places')
  }
}

module.exports = PlaceSchema
