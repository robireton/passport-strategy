/**
 * Creates an instance of `Strategy`.
 *
 * @constructor
 * @api public
 */
export class Strategy {
  /**
   * Authenticate request.
   *
   * This function must be overridden by subclasses.  In abstract form, it always
   * throws an exception.
   *
   * @param {Object} req The request to authenticate.
   * @param {Object} [options] Strategy-specific options.
   * @api public
   */
  authenticate (req, options) {
    throw new Error('Strategy#authenticate must be overridden by subclass')
  }
}
