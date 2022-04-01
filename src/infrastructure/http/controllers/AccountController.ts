import { Request, Response } from "express";

class AccountController {
    listen(req: Request, res: Response): Response {
        return res.status(200).json({ ok: true })
    }
}

export { AccountController }