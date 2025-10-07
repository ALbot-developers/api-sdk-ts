// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Oauth2API from '../oauth2';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ConnectionCommandResource extends APIResource {
  /**
   * Get Guild Connection Command
   */
  retrieve(guildID: number, options?: RequestOptions): APIPromise<ConnectionCommandRetrieveResponse> {
    return this._client.get(path`/guilds/${guildID}/connection_command`, options);
  }

  /**
   * Update Guild Connection Command
   */
  update(
    guildID: number,
    body: ConnectionCommandUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.put(path`/guilds/${guildID}/connection_command`, { body, ...options });
  }
}

export interface ConnectionCommand {
  command: string;
}

export interface ConnectionCommandRetrieveResponse {
  data: ConnectionCommand;

  message: string;
}

export interface ConnectionCommandUpdateParams {
  command: string;
}

export declare namespace ConnectionCommandResource {
  export {
    type ConnectionCommand as ConnectionCommand,
    type ConnectionCommandRetrieveResponse as ConnectionCommandRetrieveResponse,
    type ConnectionCommandUpdateParams as ConnectionCommandUpdateParams,
  };
}
