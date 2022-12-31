const MySql = require("sync-mysql")



//* Need to provide the connection setting to the MySql
const connectionSetting = {
    host:"localhost",
    user:"root",
    password:"admin123",
    database:"todoschema"
}

const connection = new MySql(connectionSetting);
console.log(connection);

const insertResult = connection.query("INSERT INTO todo(todoitem) value (' Buy Basmati Rice ')")
console.log(insertResult);

const selectResult = connection.query("select * from todo")
console.log(selectResult)

const updateResult = connection.query("Update todo set todoitem='Buy Fresh paneer' WHERE todokey = 2")
console.log(updateResult)
console.log(connection.query("select * from todo"))

connection.dispose();

