// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Oauth2API from '../oauth2';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TrustedRoles extends APIResource {
  /**
   * Update Guild Trusted Roles
   */
  update(
    guildID: number,
    body: TrustedRoleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.put(path`/guilds/${guildID}/trusted_roles`, { body, ...options });
  }

  /**
   * Get Guild Trusted Roles
   */
  list(guildID: number, options?: RequestOptions): APIPromise<TrustedRoleListResponse> {
    return this._client.get(path`/guilds/${guildID}/trusted_roles`, options);
  }
}

export interface TrustedRoleListResponse {
  data: TrustedRoleListResponse.Data;

  message: string;
}

export namespace TrustedRoleListResponse {
  export interface Data {
    enabled?: boolean;

    role_ids?: Array<number>;
  }
}

export interface TrustedRoleUpdateParams {
  enabled?: boolean | null;

  role_ids?: Array<number> | null;
}

export declare namespace TrustedRoles {
  export {
    type TrustedRoleListResponse as TrustedRoleListResponse,
    type TrustedRoleUpdateParams as TrustedRoleUpdateParams,
  };
}
