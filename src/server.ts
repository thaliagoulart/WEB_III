import { Database } from './database';
import express, { response } from "express";

const server = express();

const port = 3000;

server.use(express.json());

const database = new Database();

server.get("/",(request, response) => {
    const user = database.select("user")
    response.json(user);
});
    // response.send('Hello World!')
    //parâmetro que esta vindo CLIENTE REQUEST
    //parâmetro que esta indo CLIENTE RESPONSE

server.post("/" , (request, response) =>{
    const { name, email } = request.body;

    const user = {
        id: "1",
        name,
        email,
    };
    database.insert('user', user);

    response.status(201).json({msg:"sucesso!"});
});

    server.listen(port, () => {
    console.log(`Server Running - end: http://localhost:${port}`);
});

