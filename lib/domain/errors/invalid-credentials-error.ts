export class InvalidCredentialError extends Error {
  constructor(message?: string) {
    super('Invalid Credentials ' + message)
    this.name = 'InvalidCredentialError'
  }
}
