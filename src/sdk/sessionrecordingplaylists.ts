import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class SessionRecordingPlaylists {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  sessionRecordingPlaylistsCreate(
    req: operations.SessionRecordingPlaylistsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionRecordingPlaylistsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionRecordingPlaylistsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/session_recording_playlists/", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionRecordingPlaylistsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sessionRecordingPlaylist = plainToInstance(
                shared.SessionRecordingPlaylist,
                httpRes?.data as shared.SessionRecordingPlaylist,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * sessionRecordingPlaylistsDestroy - Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
  **/
  sessionRecordingPlaylistsDestroy(
    req: operations.SessionRecordingPlaylistsDestroyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionRecordingPlaylistsDestroyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionRecordingPlaylistsDestroyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/session_recording_playlists/{short_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionRecordingPlaylistsDestroyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 405:
            break;
        }

        return res;
      })
  }

  
  sessionRecordingPlaylistsList(
    req: operations.SessionRecordingPlaylistsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionRecordingPlaylistsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionRecordingPlaylistsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/session_recording_playlists/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionRecordingPlaylistsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.paginatedSessionRecordingPlaylistList = plainToInstance(
                shared.PaginatedSessionRecordingPlaylistList,
                httpRes?.data as shared.PaginatedSessionRecordingPlaylistList,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  sessionRecordingPlaylistsPartialUpdate(
    req: operations.SessionRecordingPlaylistsPartialUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionRecordingPlaylistsPartialUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionRecordingPlaylistsPartialUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/session_recording_playlists/{short_id}/", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionRecordingPlaylistsPartialUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sessionRecordingPlaylist = plainToInstance(
                shared.SessionRecordingPlaylist,
                httpRes?.data as shared.SessionRecordingPlaylist,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  sessionRecordingPlaylistsRecordingsCreate(
    req: operations.SessionRecordingPlaylistsRecordingsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionRecordingPlaylistsRecordingsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionRecordingPlaylistsRecordingsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}/", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionRecordingPlaylistsRecordingsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sessionRecordingPlaylist = plainToInstance(
                shared.SessionRecordingPlaylist,
                httpRes?.data as shared.SessionRecordingPlaylist,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  sessionRecordingPlaylistsRecordingsDestroy(
    req: operations.SessionRecordingPlaylistsRecordingsDestroyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionRecordingPlaylistsRecordingsDestroyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionRecordingPlaylistsRecordingsDestroyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionRecordingPlaylistsRecordingsDestroyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  sessionRecordingPlaylistsRecordingsRetrieve(
    req: operations.SessionRecordingPlaylistsRecordingsRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionRecordingPlaylistsRecordingsRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionRecordingPlaylistsRecordingsRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionRecordingPlaylistsRecordingsRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sessionRecordingPlaylist = plainToInstance(
                shared.SessionRecordingPlaylist,
                httpRes?.data as shared.SessionRecordingPlaylist,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  sessionRecordingPlaylistsRetrieve(
    req: operations.SessionRecordingPlaylistsRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionRecordingPlaylistsRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionRecordingPlaylistsRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/session_recording_playlists/{short_id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionRecordingPlaylistsRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sessionRecordingPlaylist = plainToInstance(
                shared.SessionRecordingPlaylist,
                httpRes?.data as shared.SessionRecordingPlaylist,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  sessionRecordingPlaylistsUpdate(
    req: operations.SessionRecordingPlaylistsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SessionRecordingPlaylistsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SessionRecordingPlaylistsUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/session_recording_playlists/{short_id}/", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SessionRecordingPlaylistsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.sessionRecordingPlaylist = plainToInstance(
                shared.SessionRecordingPlaylist,
                httpRes?.data as shared.SessionRecordingPlaylist,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
