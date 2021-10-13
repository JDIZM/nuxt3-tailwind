// export default (req, res) => ({
//     message: 'hello world',
//     items: [1, 2, 3],
// })
import type { IncomingMessage, ServerResponse } from 'http'
export default async (req: IncomingMessage, res: ServerResponse) => {
    console.log('req', req.statusCode, req.statusMessage)
    console.log('res', res.statusCode, res.statusMessage)
    res.end(JSON.stringify({
        message: 'hello world',
        items: [1, 2, 3],
    }))
  }