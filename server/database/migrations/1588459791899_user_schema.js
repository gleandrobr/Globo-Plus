'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.jsonb('preferences')
      table.boolean('first_login').defaultTo(true)
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('preferences')
      table.dropColumn('first_login')
    })
  }
}

module.exports = UserSchema
