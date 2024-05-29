import { StatusCodes } from "http-status-codes";
import { CustomAPIError } from "./custom-api";

export class Unauthenticated extends CustomAPIError {
  constructor(message: string) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}
