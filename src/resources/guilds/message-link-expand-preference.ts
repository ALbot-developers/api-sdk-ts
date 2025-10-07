// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Oauth2API from '../oauth2';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MessageLinkExpandPreferenceResource extends APIResource {
  /**
   * Get Guild Message Link Expand Pref
   */
  retrieve(
    guildID: number,
    options?: RequestOptions,
  ): APIPromise<MessageLinkExpandPreferenceRetrieveResponse> {
    return this._client.get(path`/guilds/${guildID}/message_link_expand_preference`, options);
  }

  /**
   * Update Guild Message Link Expand Pref
   */
  update(
    guildID: number,
    body: MessageLinkExpandPreferenceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.post(path`/guilds/${guildID}/message_link_expand_preference`, { body, ...options });
  }
}

export interface MessageLinkExpandPreference {
  enabled: boolean;
}

export interface MessageLinkExpandPreferenceRetrieveResponse {
  data: MessageLinkExpandPreference;

  message: string;
}

export interface MessageLinkExpandPreferenceUpdateParams {
  enabled: boolean;
}

export declare namespace MessageLinkExpandPreferenceResource {
  export {
    type MessageLinkExpandPreference as MessageLinkExpandPreference,
    type MessageLinkExpandPreferenceRetrieveResponse as MessageLinkExpandPreferenceRetrieveResponse,
    type MessageLinkExpandPreferenceUpdateParams as MessageLinkExpandPreferenceUpdateParams,
  };
}
