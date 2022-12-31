import MySql, { Connection , MysqlError} from "mysql";

const connectionSettings  = {
    host:"localhost",
    user:"root",
    password:"admin123",
    database:"todoschema"
}
const connection: Connection  = MySql.createConnection(connectionSettings);
connection.connect();

function onInsert(err: MysqlError | null, result:any) {
    if(err)
        console.log(err)
    else
        console.log(result);
}
connection.query("INSERT INTO todo(todoItem) value (' Buy Green Tea')", onInsert)

//~*                                                         async callback
//~*                                                             |         
//~*                                                             ^         
const queryObject = connection.query("select * from todo", (err: MysqlError, result:any) => {
    if(!err)
        console.log(result)
    else
        console.log(err)
});
connection.end();
