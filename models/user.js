const knex = require('../libraries/knex');
const Strings = require('../libraries/string');

let TABLE_NAME = 'users';

exports.create = (email, rawPassword, name) => {
    const password = Strings.generatePasswordHash(rawPassword)
    return knex(TABLE_NAME)
        .insert({email, password, name})
}


exports.findOne = where => knex(TABLE_NAME)
  .select("*")
  .where(where)
  .first();

exports.getList = () => knex(TABLE_NAME).select('*');

exports.count = () => knex(TABLE_NAME).count().first();

exports.init = () => knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id')
    table.string('email')
    table.string('password')
    table.string('name')
/*
//check table made
}).then(result => {
    return knex.raw('SELECT name FROM sqlite_master WHERE type=\'table\'')
*/
}).then(result => {
    if (result) console.log(result)
    console.log("init done")
})