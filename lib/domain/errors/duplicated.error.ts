export class DuplicateError extends Error {
  constructor(message = 'Duplicated Value') {
    super(message)
    this.name = 'DuplicateError'
  }
}
