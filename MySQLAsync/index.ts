import MySql from 'mysql2/promise';

const connectionSettings = {
    host:"localhost",
    user:"root",
    password:"admin123",
    database:"todoschema"
}

async function main() {
    let connection;
    try {
        connection = await MySql.createConnection(connectionSettings)
        const [rows, column] = await connection.execute('SELECT * from todo')
        console.log(rows);
    } catch(e:any) {
        console.log(e.sqlMessage)
    } finally {
        connection?.end()
    }
}

main()