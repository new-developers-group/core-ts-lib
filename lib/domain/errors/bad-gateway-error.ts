export class BadGatewayError extends Error {
  constructor(message = `Client can not find the service:`) {
    super(message)
    this.name = 'BadGatewayError'
  }
}
