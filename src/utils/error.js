export default class StatusError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'StatusError';
    this.message = message;
    this.status = status;
    // Error.captureStackTrace(this, this.constructor.name);
  }
}
