export class ValueNotExistsError extends Error {
  constructor(field: string) {
    super(`Value is not valid for: ${field}`)
    this.name = 'ValueNotExistsError'
  }
}
