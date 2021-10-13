import type { IncomingMessage, ServerResponse } from 'http'
// import {router} from 'nuxt3'
export default async (req: IncomingMessage, res: ServerResponse) => {
    console.log('req', req.statusCode, req.statusMessage)
    console.log('res', res.statusCode, res.statusMessage)
  }

  // type small = 'one'  | 'two'
  // const x: small = 'two' 
  // const y = {
  //   message: 'one'
  // }

  // const data = y