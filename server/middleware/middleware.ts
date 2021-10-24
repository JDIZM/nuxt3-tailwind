import type { IncomingMessage, ServerResponse } from "http";

export default async (req: IncomingMessage, res: ServerResponse) => {
  // middleware intercepts request and response
  // can modify and return new values based on conditions
  console.log("middleware req", req.url);
  console.log("middleware res", res.statusCode);
};
