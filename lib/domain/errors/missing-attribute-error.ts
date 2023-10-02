export class MissingAttributeError extends Error {
  constructor(message = 'Missing Attribute Error') {
    super(message)
    this.name = 'MissingAttributeError'
  }
}
