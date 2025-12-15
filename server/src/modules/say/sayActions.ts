import type { RequestHandler } from "express";

const welcome: RequestHandler = (req, res) => {
  console.info(req.query);
  res.send(`Welcome to wild series, ${req.query.name}${req.query.lastname}`);
};

export default { welcome };
