export class BadGatewayError extends Error {
  constructor(message?: string) {
    super(`Client can not find the service: ${message}`);
    this.name = 'BadGatewayError';
  }
}
