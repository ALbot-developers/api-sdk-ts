// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Oauth2API from '../../oauth2';
import * as GuildsAPI from './guilds';
import {
  GuildListParams,
  GuildListResponse,
  GuildRetrieveInfoResponse,
  Guilds,
  PartialGuild,
} from './guilds';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionActivate,
  SubscriptionActivateParams,
  SubscriptionRenew,
  SubscriptionRenewParams,
  Subscriptions,
} from './subscriptions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Me extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  guilds: GuildsAPI.Guilds = new GuildsAPI.Guilds(this._client);

  /**
   * Checkout Session
   */
  createCheckoutSession(
    body: MeCreateCheckoutSessionParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.URLAPIResponse> {
    return this._client.post('/users/me/checkout-session', { body, ...options });
  }

  /**
   * Get User Info Api
   */
  retrieveInfo(options?: RequestOptions): APIPromise<MeRetrieveInfoResponse> {
    return this._client.get('/users/me/info', options);
  }
}

export interface MeRetrieveInfoResponse {
  data: MeRetrieveInfoResponse.Data;

  message: string;
}

export namespace MeRetrieveInfoResponse {
  export interface Data {
    info: Data.Info;
  }

  export namespace Data {
    export interface Info {
      id: string;

      accent_color: number | null;

      avatar: string | null;

      avatar_decoration_data: Info.AvatarDecorationData | null;

      banner: string | null;

      bot: boolean | null;

      discriminator: string;

      email: string | null;

      flags: number;

      global_name: string | null;

      locale: string;

      mfa_enabled: boolean;

      premium_type: number | null;

      public_flags: number;

      system: boolean | null;

      username: string;

      verified: boolean | null;
    }

    export namespace Info {
      export interface AvatarDecorationData {
        asset: string;

        sku_id?: string | null;
      }
    }
  }
}

export interface MeCreateCheckoutSessionParams {
  plan: string;
}

Me.Subscriptions = Subscriptions;
Me.Guilds = Guilds;

export declare namespace Me {
  export {
    type MeRetrieveInfoResponse as MeRetrieveInfoResponse,
    type MeCreateCheckoutSessionParams as MeCreateCheckoutSessionParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionActivate as SubscriptionActivate,
    type SubscriptionRenew as SubscriptionRenew,
    type SubscriptionActivateParams as SubscriptionActivateParams,
    type SubscriptionRenewParams as SubscriptionRenewParams,
  };

  export {
    Guilds as Guilds,
    type PartialGuild as PartialGuild,
    type GuildListResponse as GuildListResponse,
    type GuildRetrieveInfoResponse as GuildRetrieveInfoResponse,
    type GuildListParams as GuildListParams,
  };
}
