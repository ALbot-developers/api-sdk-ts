// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Oauth2API from '../oauth2';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Dict extends APIResource {
  /**
   * Get Guild Dict Api
   */
  retrieve(guildID: number, options?: RequestOptions): APIPromise<DictRetrieveResponse> {
    return this._client.get(path`/guilds/${guildID}/dict`, options);
  }

  /**
   * Delete Guild Dict
   */
  delete(guildID: number, options?: RequestOptions): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.delete(path`/guilds/${guildID}/dict`, options);
  }

  /**
   * Replace Guild Dict
   */
  replace(
    guildID: number,
    body: DictReplaceParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.put(path`/guilds/${guildID}/dict`, { body, ...options });
  }
}

export interface DictRetrieveResponse {
  data: DictRetrieveResponse.Data;

  message: string;
}

export namespace DictRetrieveResponse {
  export interface Data {
    dict: unknown;
  }
}

export interface DictReplaceParams {
  dict: unknown;
}

export declare namespace Dict {
  export { type DictRetrieveResponse as DictRetrieveResponse, type DictReplaceParams as DictReplaceParams };
}
