import type { RequestHandler } from "express";

const welcome: RequestHandler = (req, res) => {
  res.send("Welcome to wild series!");
};

export default { welcome };
