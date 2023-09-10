export class ServiceConnectorError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, ServiceConnectorError.prototype);
  }
}
