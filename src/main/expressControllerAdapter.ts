import { BaseController } from '@/http/protocols'
import { Request, Response } from 'express'

export const adaptExpressRoute =
  (controller: BaseController) =>
  async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await controller.handle({ body: req.body })
      res.status(response.status).send(response.data)
    } catch (error) {
      res.status(500).send(error.message || 'Internal server error')
    }
  }
