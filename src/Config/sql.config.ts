// import mssql from 'mssql'
import dotenv from 'dotenv'

dotenv.config();

console.log(process.env.DB_NAME);


export const sqlConfig = {
    // user: process.env.DB_USER as string,
    // password: process.env.DB_PWD as string,
    // database: process.env.DB_NAME as string,
    // server: process.env.SERVER as string,
    user: "sa",
    password: "Nairobi@2023",
    database: "JituClub",
    server: "DESKTOP-E5BURTF",
    SECRET:"IUTR87GJWEF",

    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },

    options:{
        encrypt: false,
        trustServerCertificate: true
    }
}

console.log(sqlConfig);

// let connect = async () =>{
//     let pool = await mssql.connect(sqlConfig)

//     if(pool.connected){
//         console.log("connected");

//         // let query = 'CREATE TABLE User3(user_id VARCHAR(100) NOT NULL, name VARCHAR(100) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, phone_number VARCHAR(15) NOT NULL UNIQUE, role VARCHAR(20), Password VARCHAR(200) NOT NULL, profile_image VARCHAR(200), location VARCHAR(150))'

//         let query = 'DROP TABLE User3'
//         let result = (await (await pool.connect()).query(query)).rowsAffected

//         console.log(result);
        
//     }else{
//         console.log('not connected');
        
//     }
// }

// connect()