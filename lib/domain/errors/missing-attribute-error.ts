export class MissingAttributeError extends Error {
  constructor() {
    super('Missing Attribute Error')
    this.name = 'MissingAttributeError'
  }
}
