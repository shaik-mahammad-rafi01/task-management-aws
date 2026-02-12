import { config } from "dotenv";
import type { Request, Response } from "express";
import express from "express";
import sequelize from "./src/sequelize";

config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3005;

app.get("/", (request: Request, response: Response) => {
    response.send("server started");
});

const startServer = async () => {
    try {
        await sequelize.authenticate();
        app.listen(port, () => {
            console.log(`server app listening on port ${port}`);
        });
    } catch (error) {
        console.error("Unable to start server:", error);
    }
};

startServer();
