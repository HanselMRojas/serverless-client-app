/**
 * Axios Wrapper HTTP Client
 *
 * Copyright 2021 Hansel M. Rojas
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import store from './index'

export interface PirPOSClient {
  $request: AxiosInstance;
  send (requestConfig: AxiosRequestConfig): Promise<AxiosResponse> | Promise<AxiosError>;
}

export interface PirPOSClientConfig {
  ssl: boolean;
  baseUrl: string;
}

export class PirPOSClient implements PirPOSClient, PirPOSClientConfig {
  public ssl: boolean
  public baseUrl: string
  public $request: AxiosInstance

  constructor (config: PirPOSClientConfig) {
    this.ssl = config.ssl
    this.baseUrl = config.baseUrl
    this.$request = axios
  }

  private parseURL (path: string | null | undefined): string {
    const protocol = this.ssl ? 'https://' : 'http://'
    return `${protocol}${this.baseUrl}${path}`
  }

  send (requestConfig: AxiosRequestConfig): Promise<AxiosResponse> {
    const token = store.getters.token

    const headers = token !== null
      ? { Authorization: `Bearer ${token}` }
      : {}

    return this.$request({
      ...requestConfig,
      url: this.parseURL(requestConfig.url),
      headers: {
        ...headers,
        ...requestConfig.headers
      }
    })
  }
}

export class PirPOSClientFactory {
  static getClient (env: string) {
    let config = {
      ssl: false,
      baseUrl: 'localhost:3000/dev/v1'
    }

    if (env === 'production') {
      config = {
        ssl: true,
        baseUrl: '1un7latn5d.execute-api.us-east-1.amazonaws.com/dev/v1'
      }
    }

    return new PirPOSClient(config)
  }
}

export default PirPOSClientFactory.getClient(process.env.NODE_ENV)
