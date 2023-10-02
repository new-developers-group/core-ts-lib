export class ServiceConnectorError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ServiceConnectorError'
  }
}
