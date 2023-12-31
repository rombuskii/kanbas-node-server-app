import "dotenv/config";
import express from 'express'
import Hello from './hello.js'
import CourseRoutes from "./courses/routes.js";
import Lab5 from './Lab5.js'
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
const app = express()
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: '*'
}));
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000, () => {
    console.log(`Listening on port 4000`)
})

