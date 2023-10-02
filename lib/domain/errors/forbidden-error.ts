export class ForbiddenError extends Error {
  constructor(message = 'Forbidden Error') {
    super(message)
    this.name = 'ForbiddenError'
  }
}
