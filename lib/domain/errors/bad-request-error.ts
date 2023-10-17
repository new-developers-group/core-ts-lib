export class BadRequestError extends Error {
  constructor(message) {
    super(message || `Invalid request`)
    this.name = 'BadRequestError'
  }
}
