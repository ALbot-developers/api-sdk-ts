// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { AlbotAPISDK } from '../client';

export abstract class APIResource {
  protected _client: AlbotAPISDK;

  constructor(client: AlbotAPISDK) {
    this._client = client;
  }
}
