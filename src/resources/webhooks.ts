// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Oauth2API from './oauth2';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Webhooks extends APIResource {
  /**
   * Stripe Webhook
   */
  createStripe(options?: RequestOptions): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.post('/webhooks/stripe', options);
  }
}
