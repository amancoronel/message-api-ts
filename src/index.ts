import express, {Express, Request, Response, NextFunction} from 'express';
import { PORT } from './config';
import log from './controller/logger';
import router from './routes';

const app:Express = express();
const NAMESPACE = "SERVER"

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use((req:Request, res:Response, next:NextFunction) => {
    log(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`, 'INFO')

    res.on("finish", () => {
        log(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`, "INFO");
    })

    next();
})

app.use(router);

app.use((req:Request, res:Response, next:NextFunction) => {
    const error = new Error("Page not found");
    
    return res.status(404).json({
        message: error.message
    })
})

app.listen(PORT, () => {
    console.log("*** App running on port : ", PORT);
})

