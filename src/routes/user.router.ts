import { Router, Request, Response, NextFunction } from 'express'
import { User } from '../models/user'

const router = Router()

router.get(
  '/user/:userId/:name/',
  (req: Request, res: Response, next: NextFunction) => {
    const { userId, name } = req.params
    const id = parseInt(userId)
    const user = new User({ id, name })
    res.send(` User: { id: ${user.getId()}, name: ${user.getName()}}`)
  }
)

export const userRouter = router
