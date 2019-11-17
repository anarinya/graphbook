module.exports = {
  "development": {
    "username": "graphbook_dev",
    "password": "Pass1234",
    "database": "graphbook_dev",
    "host": "localhost",
    "dialect": "mysql",
    "operatorAliases": false,
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
    }
  },
  "production": {
    "host": process.env.host,
    "username": process.env.db_username,
    "password": process.env.db_password,
    "database": process.env.database,
    "logging": false,
    "dialect": "mysql",
    "operatorAliases": false,
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
    }
  }
}