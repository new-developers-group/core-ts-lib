export class InvalidFieldError extends Error {
  constructor(message: string) {
    super(`Invalid Value: ${message}`)
    this.name = 'InvalidFieldError'
    this.message = message
  }
}
