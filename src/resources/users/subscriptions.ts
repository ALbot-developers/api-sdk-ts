// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Oauth2API from '../oauth2';
import * as GuildsAPI from '../guilds/guilds';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * List Subscriptions Api
   */
  list(userID: number, options?: RequestOptions): APIPromise<GuildsAPI.ListSubscriptions> {
    return this._client.get(path`/users/${userID}/subscriptions`, options);
  }

  /**
   * Activate Subscriptions Api
   */
  activate(
    subID: string,
    params: SubscriptionActivateParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    const { user_id, ...body } = params;
    return this._client.post(path`/users/${user_id}/subscriptions/${subID}/activate`, { body, ...options });
  }

  /**
   * Cancel Subscriptions Api
   */
  cancel(
    subID: string,
    params: SubscriptionCancelParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    const { user_id } = params;
    return this._client.post(path`/users/${user_id}/subscriptions/${subID}/cancel`, options);
  }

  /**
   * Renew Subscriptions Api
   */
  renew(
    subID: string,
    params: SubscriptionRenewParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    const { user_id, ...body } = params;
    return this._client.post(path`/users/${user_id}/subscriptions/${subID}/renew`, { body, ...options });
  }
}

export interface SubscriptionActivateParams {
  /**
   * Path param
   */
  user_id: number;

  /**
   * Body param
   */
  guild_id: number;
}

export interface SubscriptionCancelParams {
  user_id: number;
}

export interface SubscriptionRenewParams {
  /**
   * Path param
   */
  user_id: number;

  /**
   * Body param
   */
  new_plan: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionActivateParams as SubscriptionActivateParams,
    type SubscriptionCancelParams as SubscriptionCancelParams,
    type SubscriptionRenewParams as SubscriptionRenewParams,
  };
}
