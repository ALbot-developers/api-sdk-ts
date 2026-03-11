// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Oauth2API from '../oauth2';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Settings extends APIResource {
  /**
   * Get Guild Settings Api
   */
  retrieve(guildID: number, options?: RequestOptions): APIPromise<SettingRetrieveResponse> {
    return this._client.get(path`/guilds/${guildID}/settings`, options);
  }

  /**
   * Update Guild Settings
   */
  update(
    guildID: number,
    body: SettingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.post(path`/guilds/${guildID}/settings`, { body, ...options });
  }

  /**
   * Delete Guild Settings
   */
  delete(guildID: number, options?: RequestOptions): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.delete(path`/guilds/${guildID}/settings`, options);
  }
}

export interface SettingRetrieveResponse {
  data: SettingRetrieveResponse.Data;

  message: string;
}

export namespace SettingRetrieveResponse {
  export interface Data {
    settings: Data.Settings;
  }

  export namespace Data {
    export interface Settings {
      audio_api: 'gtts' | 'openai';

      character_limit: number;

      guild_id: number;

      lang: string;

      read_guild: boolean;

      read_name: boolean;

      read_name_on_join: boolean;

      read_name_on_leave: boolean;

      read_not_joined_users: boolean;

      speech_speed: number;

      translate: boolean;

      custom_voice?: string | null;
    }
  }
}

export interface SettingUpdateParams {
  audio_api?: 'gtts' | 'openai' | null;

  /**
   * Maximum character limit for messages
   */
  character_limit?: number | null;

  custom_voice?: string | null;

  lang?: string | null;

  read_guild?: boolean | null;

  read_name?: boolean | null;

  read_name_on_join?: boolean | null;

  read_name_on_leave?: boolean | null;

  read_not_joined_users?: boolean | null;

  /**
   * Speech speed multiplier
   */
  speech_speed?: number | null;

  translate?: boolean | null;
}

export declare namespace Settings {
  export {
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
