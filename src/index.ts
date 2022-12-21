import "reflect-metadata"
import app from './app';
import { AppDataSource } from "./database/bd";

const main = async () =>{
    try {
        app.listen(3000);
        console.log('listening on port 3000');
        AppDataSource.initialize();
        console.log("Base de datos conectada...");
    } catch (error) {
        console.log(error)
    }
}

main();