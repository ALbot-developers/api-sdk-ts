// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Metrics extends APIResource {
  /**
   * Get Metrics
   */
  retrieve(options?: RequestOptions): APIPromise<MetricRetrieveResponse> {
    return this._client.get('/metrics', options);
  }
}

export interface MetricRetrieveResponse {
  data: MetricRetrieveResponse.Data;

  message: string;
}

export namespace MetricRetrieveResponse {
  export interface Data {
    metrics: Data.Metrics;
  }

  export namespace Data {
    export interface Metrics {
      connected: number;

      guilds: number;
    }
  }
}

export declare namespace Metrics {
  export { type MetricRetrieveResponse as MetricRetrieveResponse };
}
