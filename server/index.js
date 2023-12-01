import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import router from "./routes/route.js";

dotenv.config();
const URL = process.env.DB_URL;
Connection(URL);

const PORT = 8000;

const App = Express();
App.use(cors());
App.use(bodyParser.json({ extended: true }));
App.use(bodyParser.urlencoded({ extended: true }));
App.use("/", router);

App.listen(PORT, () => {
  console.log(`App is running at port:${PORT}`);
});
DefaultData();
