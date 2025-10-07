// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Oauth2API from '../oauth2';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CharacterUsageResource extends APIResource {
  /**
   * Get Guild Character Usage Api
   */
  retrieve(guildID: number, options?: RequestOptions): APIPromise<CharacterUsageRetrieveResponse> {
    return this._client.get(path`/guilds/${guildID}/character_usage`, options);
  }

  /**
   * Update Guild Character Usage
   */
  update(
    guildID: number,
    body: CharacterUsageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.post(path`/guilds/${guildID}/character_usage`, { body, ...options });
  }
}

export interface CharacterUsage {
  used_characters: number;

  monthly_quota?: number;
}

export interface CharacterUsages {
  standard: CharacterUsage;

  wavenet: CharacterUsage;
}

export interface CharacterUsageRetrieveResponse {
  data: CharacterUsages;

  message: string;
}

export interface CharacterUsageUpdateParams {
  standard?: CharacterUsage | null;

  wavenet?: CharacterUsage | null;
}

export declare namespace CharacterUsageResource {
  export {
    type CharacterUsage as CharacterUsage,
    type CharacterUsages as CharacterUsages,
    type CharacterUsageRetrieveResponse as CharacterUsageRetrieveResponse,
    type CharacterUsageUpdateParams as CharacterUsageUpdateParams,
  };
}
