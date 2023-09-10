export class DuplicateError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, DuplicateError.prototype);
  }
}
