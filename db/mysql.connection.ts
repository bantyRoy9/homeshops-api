import { DataSource } from "typeorm";
import { User } from "../src/User/Model/user.model";

export default new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST||'localhost',
    port: 3306,
    username: 'bantikumar',
    password: "banti@9716",
    database:'homeshops',
    entities: [User],
    migrations: ["./migrations/*.ts"],
    synchronize: true, 
    // logging: true,
})

