import { Request,Response } from "express";

class IndexController {
    index(req: Request, res: Response) {
            res.send("Send");
    }
}


export const  indexController = new IndexController();

