import { StatusCodes } from "http-status-codes";

import { CustomAPIError } from "./custom-api";

export class BadRequestError extends CustomAPIError {
  constructor(message: string) {
    super(message);
    this.StatusCode = StatusCodes.BAD_REQUEST;
  }
}
