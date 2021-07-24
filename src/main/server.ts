import * as express from 'express'
import { expressCreateClassRoute } from './routes'

export const server = express()

server.post('/class', expressCreateClassRoute)
