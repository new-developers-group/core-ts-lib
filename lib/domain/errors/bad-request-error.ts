export class BadRequestError extends Error {
  constructor(message) {
    super(message ? message : `Invalid request`)
    this.name = 'BadRequestError'
  }
}
