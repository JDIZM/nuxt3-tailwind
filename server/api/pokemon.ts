//  https://pokeapi.co/api/v2/pokemon/
import type { IncomingMessage, ServerResponse } from 'http'
export default async (req: IncomingMessage, res: ServerResponse) => {
    // console.log('req params', req.params)
    // console.log('req url', req.originalUrl)
    // console.log('req body', req.body)
    // console.log('res', res.statusCode, res.statusMessage)
    res.end(JSON.stringify({
        message: 'hello world',
        items: [1, 2, 3],
    }))
  }