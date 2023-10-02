export class InvalidCredentialError extends Error {
  constructor(message = 'Invalid Credentials ') {
    super(message)
    this.name = 'InvalidCredentialError'
  }
}
