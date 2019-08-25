import request from 'request-promise';
import { SetupConfig } from './interfaces/SetupConfig';
import { RequestObject } from './interfaces/RequestObject';

export default class HttpService {
  public config: SetupConfig;

  constructor (config: SetupConfig) {
    this.config = config;
  }

  /**
   * Make the http request
   * @param {RequestObject} requestObject
   */
  public async sendRequest (requestObject: RequestObject) {
    requestObject.resolveWithFullResponse = true;
    requestObject.headers = Object.assign(this.config.defaultHeaders, requestObject.headers || {});
    try {
      const response = await request(requestObject);
      return response.body;
    } catch (error) {
      // @ts-ignore
      if (this.config['handle' + error.statusCode]) {
        // @ts-ignore
        throw new this.config['handle' + error.statusCode];
      } else {
        throw error;
      }
    }
  }
}
