require("dotenv").config(); 
// ^ ^ ^ don't forget this in the future.
module.exports = {
  "development": {
    "username": "root",
    "password": "Naruto21?!",
    "database": "passport_demo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "Naruto21?!",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
