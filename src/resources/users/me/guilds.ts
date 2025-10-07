// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as GuildsAPI from './guilds';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Guilds extends APIResource {
  /**
   * List User Guilds
   */
  list(
    query: GuildListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GuildListResponse> {
    return this._client.get('/users/me/guilds', { query, ...options });
  }

  /**
   * Get Guild Info
   */
  retrieveInfo(guildID: number, options?: RequestOptions): APIPromise<GuildRetrieveInfoResponse> {
    return this._client.get(path`/users/me/guilds/${guildID}/info`, options);
  }
}

export interface PartialGuild {
  id: string;

  banner: string | null;

  features: Array<string>;

  icon: string | null;

  name: string;

  owner: boolean;

  permissions: string;

  approximate_member_count?: number | null;

  approximate_presence_count?: number | null;
}

export interface GuildListResponse {
  data: GuildListResponse.Data;

  message: string;
}

export namespace GuildListResponse {
  export interface Data {
    guilds: Array<GuildsAPI.PartialGuild>;
  }
}

export interface GuildRetrieveInfoResponse {
  data: GuildRetrieveInfoResponse.Data;

  message: string;
}

export namespace GuildRetrieveInfoResponse {
  export interface Data {
    info: GuildsAPI.PartialGuild;
  }
}

export interface GuildListParams {
  mutual?: boolean;
}

export declare namespace Guilds {
  export {
    type PartialGuild as PartialGuild,
    type GuildListResponse as GuildListResponse,
    type GuildRetrieveInfoResponse as GuildRetrieveInfoResponse,
    type GuildListParams as GuildListParams,
  };
}
