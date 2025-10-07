// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Oauth2 extends APIResource {
  /**
   * Oauth2 Callback
   */
  callback(params: Oauth2CallbackParams, options?: RequestOptions): APIPromise<PlainAPIResponse> {
    const { code, state } = params;
    return this._client.post('/oauth2/callback', { query: { code, state }, ...options });
  }

  /**
   * Logout
   */
  logout(options?: RequestOptions): APIPromise<PlainAPIResponse> {
    return this._client.post('/oauth2/logout', options);
  }

  /**
   * Oauth2 Redirect
   */
  redirect(query: Oauth2RedirectParams, options?: RequestOptions): APIPromise<URLAPIResponse> {
    return this._client.get('/oauth2/login', { query, ...options });
  }
}

export interface PlainAPIResponse {
  message: string;
}

export interface URLAPIResponse {
  data: URLAPIResponse.Data;

  message: string;
}

export namespace URLAPIResponse {
  export interface Data {
    url: string;
  }
}

export interface Oauth2CallbackParams {
  code: string;

  state: string;
}

export interface Oauth2RedirectParams {
  redirect: string;
}

export declare namespace Oauth2 {
  export {
    type PlainAPIResponse as PlainAPIResponse,
    type URLAPIResponse as URLAPIResponse,
    type Oauth2CallbackParams as Oauth2CallbackParams,
    type Oauth2RedirectParams as Oauth2RedirectParams,
  };
}
