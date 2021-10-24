import type { IncomingMessage, ServerResponse } from "http";

// make a request with query params to /api/world?key=value
export default async (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url!, `http://${req.headers.host}/api/world`);
  interface obj {
    [key: string]: string;
  }
  const obj: obj = {};

  console.log("api req", url);

  for (const [key, value] of url.searchParams) {
    obj[key] = value;
  }

  if (!Object.entries(obj).length) {
    res.statusCode = 404;
    console.log("api res", res.statusCode);
    return res.end("nothing found");
  }

  console.log("api res", res.statusCode);
  res.end(JSON.stringify(obj));
};
