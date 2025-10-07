// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionActivateParams,
  SubscriptionCancelParams,
  SubscriptionRenewParams,
  Subscriptions,
} from './subscriptions';
import * as MeAPI from './me/me';
import { Me, MeCreateCheckoutSessionParams, MeRetrieveInfoResponse } from './me/me';

export class Users extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Users.Me = Me;
Users.Subscriptions = Subscriptions;

export declare namespace Users {
  export {
    Me as Me,
    type MeRetrieveInfoResponse as MeRetrieveInfoResponse,
    type MeCreateCheckoutSessionParams as MeCreateCheckoutSessionParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionActivateParams as SubscriptionActivateParams,
    type SubscriptionCancelParams as SubscriptionCancelParams,
    type SubscriptionRenewParams as SubscriptionRenewParams,
  };
}
