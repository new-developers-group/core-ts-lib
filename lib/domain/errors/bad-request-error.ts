export class BadRequestError extends Error {
  constructor(message?: string) {
    super('Invalid request ' + message);
    this.name = 'BadRequestError';
  }
}
