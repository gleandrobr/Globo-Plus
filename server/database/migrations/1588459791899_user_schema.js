'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.jsonb('preferences')
    })
  }

  down () {
    this.table('users', (table) => {
      table.dropColumn('preferences')
    })
  }
}

module.exports = UserSchema
