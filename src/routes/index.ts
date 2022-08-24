import { Request, Response, Router } from 'express'
import { createUserController } from '../Services/UserServices'
import { authController } from '../Services/AuthenticationService'
import { authMiddleware } from '../Services/AuthenticationService/authMIddleware'
const router = Router()

router.post('/user', async (req: Request, res: Response): Promise<Response> => {
  return createUserController.handle(req, res)
})

router.post('/auth', async (req: Request, res: Response): Promise<Response> => {
  return authController.handle(req, res)
})

router.get(
  '/testauth',
  authMiddleware,
  async (req: Request, res: Response): Promise<Response> => {
    return res.json({})
  }
)

export { router }
