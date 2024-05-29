export class CustomAPIError extends Error {
  StatusCode?: number;
  constructor(message: string) {
    super(message);
  }
}
