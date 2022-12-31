const MySql = require("mysql")

const connectionSettings = {
    host:"localhost",
    user:"root",
    password:"admin123",
    database:"todoschema"
}
const connection  = MySql.createConnection(connectionSettings);
connection.connect();

// function onInsert(err, result) {
//     if(err)
//         console.log(err)
//     else
//         console.log(result);
// }
// connection.query("INSET INTO todo(todoitem) values (' Buy Green Tea')", onInsert)

//~*                                                         async callback
//~*                                                             |         
//~*                                                             ^         
const queryObject = connection.query("select * from todo", (err, result) => {
    if(!err)
        console.log(result)
    else
        console.log(err)
});
connection.end();
