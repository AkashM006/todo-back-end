import { Request, Response } from "express";

const register = (req: Request, res: Response) => {
  const { email, password } = req.body;

  // first check if the user already exists

  // if not then create an account and send jwt for login
};

export { register };
