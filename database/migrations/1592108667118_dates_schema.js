'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DatesSchema extends Schema {
  up () {
    this.create('dates', (table) => {
      table.increments()
      table.integer('userId').unsigned().references('id').inTable('users')
      table.string('who', 20).notNullable()
      table.date('birth')
      table.timestamps()
    })
  }

  down () {
    this.drop('dates')
  }
}

module.exports = DatesSchema
