// eslint-disable-next-line @typescript-eslint/no-var-requires
if (process.env.PARSE_MODULES) require('module-alias')('.')

import { server } from './main/server'

server.listen(3000, () => console.log('listening on 3000'))
