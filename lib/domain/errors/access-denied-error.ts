export class AccessDeniedError extends Error {
  constructor(message = 'Access Denied Error') {
    super(message)
    this.name = 'AccessDeniedError'
  }
}
