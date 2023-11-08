import Express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";

dotenv.config();
const URL = process.env.DB_URL;
Connection(URL);


const PORT = 8000;

const App = Express();

App.listen(PORT, () => {
  console.log(`App is running at port:${PORT}`);
});
DefaultData();
