// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Oauth2API from './oauth2';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Shards extends APIResource {
  /**
   * Index
   */
  list(
    query: ShardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShardListResponse> {
    return this._client.get('/shards', { query, ...options });
  }

  /**
   * Assign Shard
   */
  assign(options?: RequestOptions): APIPromise<ShardAssignResponse> {
    return this._client.get('/shards/assign', options);
  }

  /**
   * Get Connection Commands
   */
  getConnectionCommands(
    shardID: number,
    query: ShardGetConnectionCommandsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShardGetConnectionCommandsResponse> {
    return this._client.get(path`/shards/${shardID}/connection_commands`, { query, ...options });
  }

  /**
   * Post Metrics
   */
  postMetrics(
    shardID: number,
    body: ShardPostMetricsParams,
    options?: RequestOptions,
  ): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.post(path`/shards/${shardID}/metrics`, { body, ...options });
  }

  /**
   * Release Shard
   */
  release(shardID: number, options?: RequestOptions): APIPromise<Oauth2API.PlainAPIResponse> {
    return this._client.post(path`/shards/${shardID}/release`, options);
  }
}

export interface ShardListResponse {
  data: ShardListResponse.Data;

  message: string;
}

export namespace ShardListResponse {
  export interface Data {
    ids: Array<number>;
  }
}

export interface ShardAssignResponse {
  data: ShardAssignResponse.Data;

  message: string;
}

export namespace ShardAssignResponse {
  export interface Data {
    discord_token: string;

    heartbeat_token: string;

    sentry_dsn: string;

    shard_count: number;

    shard_id: number;

    tts_key: string;
  }
}

export interface ShardGetConnectionCommandsResponse {
  data: ShardGetConnectionCommandsResponse.Data;

  message: string;
}

export namespace ShardGetConnectionCommandsResponse {
  export interface Data {
    commands: unknown;
  }
}

export interface ShardListParams {
  status?: 'online' | 'offline' | 'all';
}

export interface ShardGetConnectionCommandsParams {
  changes_only?: boolean;
}

export interface ShardPostMetricsParams {
  connected?: number | null;

  guilds?: number | null;
}

export declare namespace Shards {
  export {
    type ShardListResponse as ShardListResponse,
    type ShardAssignResponse as ShardAssignResponse,
    type ShardGetConnectionCommandsResponse as ShardGetConnectionCommandsResponse,
    type ShardListParams as ShardListParams,
    type ShardGetConnectionCommandsParams as ShardGetConnectionCommandsParams,
    type ShardPostMetricsParams as ShardPostMetricsParams,
  };
}
