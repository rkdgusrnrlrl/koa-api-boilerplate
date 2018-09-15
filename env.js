module.exports = {
  server: {
    port: 3000,
    url: 'http://localhost:3000'
  },
  jwt: {
    secret: '`yGE[RniLYCX6rCni>DKG_(3#si&zvA$WPmgrb2P',
    expiresIn: 36000
  },
  knex: {
    client: 'sqlite3',
    connection:':memory:',
    pool: { min: 0, max: 7 },
    debug: false
  }
}