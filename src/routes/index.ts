import express, { Router, Response, Request } from 'express';
import validateMessage from '../controller/validate';

const router:Router = express.Router();

interface BodyReq {
    message: string
    conversation_id: string
}

interface Req extends Request{
    body: BodyReq
}

router.get('/ping', (req:Request, res:Response) => {
    res.send("PONG");
})

router.post("/message", (req:Req, res:Response) => {
    const { conversation_id, message} = req.body;

    res.status(200).json({
        conversation_id,
        response:validateMessage(message)
    })

})


export default router;