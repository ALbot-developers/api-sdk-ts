// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Oauth2API from '../oauth2';
import * as CharacterUsageAPI from './character-usage';
import {
  CharacterUsage,
  CharacterUsageResource,
  CharacterUsageRetrieveResponse,
  CharacterUsageUpdateParams,
  CharacterUsages,
} from './character-usage';
import * as ConnectionCommandAPI from './connection-command';
import {
  ConnectionCommand,
  ConnectionCommandResource,
  ConnectionCommandRetrieveResponse,
  ConnectionCommandUpdateParams,
} from './connection-command';
import * as DictAPI from './dict';
import { Dict, DictReplaceParams, DictRetrieveResponse } from './dict';
import * as MessageLinkExpandPreferenceAPI from './message-link-expand-preference';
import {
  MessageLinkExpandPreference,
  MessageLinkExpandPreferenceResource,
  MessageLinkExpandPreferenceRetrieveResponse,
  MessageLinkExpandPreferenceUpdateParams,
} from './message-link-expand-preference';
import * as SettingsAPI from './settings';
import { SettingRetrieveResponse, SettingUpdateParams, Settings } from './settings';
import * as TrustedRolesAPI from './trusted-roles';
import { TrustedRoleListResponse, TrustedRoleUpdateParams, TrustedRoles } from './trusted-roles';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Guilds extends APIResource {
  dict: DictAPI.Dict = new DictAPI.Dict(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  characterUsage: CharacterUsageAPI.CharacterUsageResource = new CharacterUsageAPI.CharacterUsageResource(
    this._client,
  );
  trustedRoles: TrustedRolesAPI.TrustedRoles = new TrustedRolesAPI.TrustedRoles(this._client);
  connectionCommand: ConnectionCommandAPI.ConnectionCommandResource =
    new ConnectionCommandAPI.ConnectionCommandResource(this._client);
  messageLinkExpandPreference: MessageLinkExpandPreferenceAPI.MessageLinkExpandPreferenceResource =
    new MessageLinkExpandPreferenceAPI.MessageLinkExpandPreferenceResource(this._client);

  /**
   * Create Guild Resources
   */
  create(guildID: number, options?: RequestOptions): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.post(path`/guilds/${guildID}`, options);
  }

  /**
   * Delete Guild Resources
   */
  delete(guildID: number, options?: RequestOptions): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.delete(path`/guilds/${guildID}`, options);
  }

  /**
   * Create Connection States Api
   */
  createConnectionStates(
    guildID: number,
    body: GuildCreateConnectionStatesParams,
    options?: RequestOptions,
  ): APIPromise<GuildCreateConnectionStatesResponse> {
    return this._client.post(path`/guilds/${guildID}/connection_states`, { body, ...options });
  }

  /**
   * Post Quick Report
   */
  createQuickReport(
    guildID: number,
    params: GuildCreateQuickReportParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    const { 'turnstile-token': turnstileToken, ...body } = params;
    return this._client.post(path`/guilds/${guildID}/quick_reports`, {
      body,
      ...options,
      headers: buildHeaders([{ 'turnstile-token': turnstileToken }, options?.headers]),
    });
  }

  /**
   * List Guild Subscriptions Api
   */
  listSubscriptions(guildID: number, options?: RequestOptions): APIPromise<ListSubscriptions> {
    return this._client.get(path`/guilds/${guildID}/subscriptions`, options);
  }
}

export interface ListSubscriptions {
  data: ListSubscriptions.Data;

  message: string;
}

export namespace ListSubscriptions {
  export interface Data {
    subscriptions: Array<Data.Subscription>;
  }

  export namespace Data {
    export interface Subscription {
      last_updated: string;

      plan: string;

      sub_id: string;

      sub_start: string;

      user_id: number;

      guild_id?: number | null;
    }
  }
}

export interface GuildCreateConnectionStatesResponse {
  data: GuildCreateConnectionStatesResponse.Data;

  message: string;
}

export namespace GuildCreateConnectionStatesResponse {
  export interface Data {
    connection_states: Data.ConnectionStates;
  }

  export namespace Data {
    export interface ConnectionStates {
      character_limit: number;

      character_usage: CharacterUsageAPI.CharacterUsages;

      custom_voice: string | null;

      dict: { [key: string]: unknown };

      dict_keys: Array<unknown>;

      guild_id: number;

      language_code: 'auto';

      read_guild: boolean;

      read_name: boolean;

      read_name_on_join: boolean;

      read_name_on_leave: boolean;

      read_not_joined_users: boolean;

      service: 'gtts' | 'openai';

      speech_speed: number;

      standard_voice: string;

      target_id: number;

      translate: boolean;

      vc_id: number;

      wavenet_voice: string;

      sync_count?: number;

      unix_time_connected?: number;
    }
  }
}

export interface GuildCreateConnectionStatesParams {
  tc_id: number;

  vc_id: number;

  character_limit?: number | null;

  lang?: string | null;

  read_guild?: boolean | null;

  read_name?: boolean | null;

  speech_speed?: number | null;

  translate?: boolean | null;
}

export interface GuildCreateQuickReportParams {
  /**
   * Body param
   */
  category: string;

  /**
   * Body param
   */
  description: string;

  /**
   * Header param: Cloudflare Turnstile token
   */
  'turnstile-token': string;
}

Guilds.Dict = Dict;
Guilds.Settings = Settings;
Guilds.CharacterUsageResource = CharacterUsageResource;
Guilds.TrustedRoles = TrustedRoles;
Guilds.ConnectionCommandResource = ConnectionCommandResource;
Guilds.MessageLinkExpandPreferenceResource = MessageLinkExpandPreferenceResource;

export declare namespace Guilds {
  export {
    type ListSubscriptions as ListSubscriptions,
    type GuildCreateConnectionStatesResponse as GuildCreateConnectionStatesResponse,
    type GuildCreateConnectionStatesParams as GuildCreateConnectionStatesParams,
    type GuildCreateQuickReportParams as GuildCreateQuickReportParams,
  };

  export {
    Dict as Dict,
    type DictRetrieveResponse as DictRetrieveResponse,
    type DictReplaceParams as DictReplaceParams,
  };

  export {
    Settings as Settings,
    type SettingRetrieveResponse as SettingRetrieveResponse,
    type SettingUpdateParams as SettingUpdateParams,
  };

  export {
    CharacterUsageResource as CharacterUsageResource,
    type CharacterUsage as CharacterUsage,
    type CharacterUsages as CharacterUsages,
    type CharacterUsageRetrieveResponse as CharacterUsageRetrieveResponse,
    type CharacterUsageUpdateParams as CharacterUsageUpdateParams,
  };

  export {
    TrustedRoles as TrustedRoles,
    type TrustedRoleListResponse as TrustedRoleListResponse,
    type TrustedRoleUpdateParams as TrustedRoleUpdateParams,
  };

  export {
    ConnectionCommandResource as ConnectionCommandResource,
    type ConnectionCommand as ConnectionCommand,
    type ConnectionCommandRetrieveResponse as ConnectionCommandRetrieveResponse,
    type ConnectionCommandUpdateParams as ConnectionCommandUpdateParams,
  };

  export {
    MessageLinkExpandPreferenceResource as MessageLinkExpandPreferenceResource,
    type MessageLinkExpandPreference as MessageLinkExpandPreference,
    type MessageLinkExpandPreferenceRetrieveResponse as MessageLinkExpandPreferenceRetrieveResponse,
    type MessageLinkExpandPreferenceUpdateParams as MessageLinkExpandPreferenceUpdateParams,
  };
}
