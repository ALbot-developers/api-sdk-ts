// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Oauth2API from '../../oauth2';
import * as GuildsAPI from '../../guilds/guilds';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * List Subscriptions Api
   */
  list(options?: RequestOptions): APIPromise<GuildsAPI.ListSubscriptions> {
    return this._client.get('/users/me/subscriptions', options);
  }

  /**
   * Activate Subscriptions Api
   */
  activate(
    subID: string,
    body: SubscriptionActivateParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.post(path`/users/me/subscriptions/${subID}/activate`, { body, ...options });
  }

  /**
   * Cancel Subscriptions Api
   */
  cancel(subID: string, options?: RequestOptions): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.post(path`/users/me/subscriptions/${subID}/cancel`, options);
  }

  /**
   * Renew Subscriptions Api
   */
  renew(
    subID: string,
    body: SubscriptionRenewParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.post(path`/users/me/subscriptions/${subID}/renew`, { body, ...options });
  }
}

export interface SubscriptionActivate {
  guild_id: number;
}

export interface SubscriptionRenew {
  new_plan: string;
}

export interface SubscriptionActivateParams {
  guild_id: number;
}

export interface SubscriptionRenewParams {
  new_plan: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionActivate as SubscriptionActivate,
    type SubscriptionRenew as SubscriptionRenew,
    type SubscriptionActivateParams as SubscriptionActivateParams,
    type SubscriptionRenewParams as SubscriptionRenewParams,
  };
}
