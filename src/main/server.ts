import * as express from 'express'
import { expressCreateClassRoute } from './routes'

export const server = express()

server.use(express.json())

server.post('/class', expressCreateClassRoute)
