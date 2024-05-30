import { CustomAPIError } from "../errors";
import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err: any, req: any, res: any, next: any) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.StatusCode).json({ msg: err.message });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};

export default errorHandlerMiddleware;
