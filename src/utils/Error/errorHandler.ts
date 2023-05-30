import { NextFunction, Request, Response } from "express";
import { CustomError } from "./Errors";

const handleError = (
  err: CustomError,
  req: Request,
  res: Response,
) => {
  res.status(err.status ?? 500).json({
    msg:
      err.message ??
      "Something went wrong when trying to process your request. Please try again.",
    status: "FAILED",
  });
};

export default handleError;
