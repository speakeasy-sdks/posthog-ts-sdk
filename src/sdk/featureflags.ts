import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class FeatureFlags {
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
  
  /**
   * featureFlagsActivityRetrieve - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsActivityRetrieve(
    req: operations.FeatureFlagsActivityRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsActivityRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsActivityRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/activity/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FeatureFlagsActivityRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlag = plainToInstance(
                shared.FeatureFlag,
                httpRes?.data as shared.FeatureFlag,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsActivityRetrieve2 - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsActivityRetrieve2(
    req: operations.FeatureFlagsActivityRetrieve2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsActivityRetrieve2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsActivityRetrieve2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/{id}/activity/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FeatureFlagsActivityRetrieve2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlag = plainToInstance(
                shared.FeatureFlag,
                httpRes?.data as shared.FeatureFlag,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsCreate - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsCreate(
    req: operations.FeatureFlagsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.FeatureFlagsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlag = plainToInstance(
                shared.FeatureFlag,
                httpRes?.data as shared.FeatureFlag,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsDestroy - Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
  **/
  featureFlagsDestroy(
    req: operations.FeatureFlagsDestroyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsDestroyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsDestroyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/{id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FeatureFlagsDestroyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 405:
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsEvaluationReasonsRetrieve - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsEvaluationReasonsRetrieve(
    req: operations.FeatureFlagsEvaluationReasonsRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsEvaluationReasonsRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsEvaluationReasonsRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/evaluation_reasons/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FeatureFlagsEvaluationReasonsRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlag = plainToInstance(
                shared.FeatureFlag,
                httpRes?.data as shared.FeatureFlag,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsList - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsList(
    req: operations.FeatureFlagsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/", req.pathParams);
    
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
        const res: operations.FeatureFlagsListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.paginatedFeatureFlagList = plainToInstance(
                shared.PaginatedFeatureFlagList,
                httpRes?.data as shared.PaginatedFeatureFlagList,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsLocalEvaluationRetrieve - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsLocalEvaluationRetrieve(
    req: operations.FeatureFlagsLocalEvaluationRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsLocalEvaluationRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsLocalEvaluationRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/local_evaluation/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FeatureFlagsLocalEvaluationRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlag = plainToInstance(
                shared.FeatureFlag,
                httpRes?.data as shared.FeatureFlag,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsMyFlagsRetrieve - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsMyFlagsRetrieve(
    req: operations.FeatureFlagsMyFlagsRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsMyFlagsRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsMyFlagsRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/my_flags/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FeatureFlagsMyFlagsRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlag = plainToInstance(
                shared.FeatureFlag,
                httpRes?.data as shared.FeatureFlag,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsPartialUpdate - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsPartialUpdate(
    req: operations.FeatureFlagsPartialUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsPartialUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsPartialUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/{id}/", req.pathParams);

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
        const res: operations.FeatureFlagsPartialUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlag = plainToInstance(
                shared.FeatureFlag,
                httpRes?.data as shared.FeatureFlag,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsRetrieve - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsRetrieve(
    req: operations.FeatureFlagsRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/{id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FeatureFlagsRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlag = plainToInstance(
                shared.FeatureFlag,
                httpRes?.data as shared.FeatureFlag,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  featureFlagsRoleAccessCreate(
    req: operations.FeatureFlagsRoleAccessCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsRoleAccessCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsRoleAccessCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/{parent_lookup_feature_flag_id}/role_access/", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.FeatureFlagsRoleAccessCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlagRoleAccess = plainToInstance(
                shared.FeatureFlagRoleAccessOutput,
                httpRes?.data as shared.FeatureFlagRoleAccessOutput,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  featureFlagsRoleAccessDestroy(
    req: operations.FeatureFlagsRoleAccessDestroyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsRoleAccessDestroyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsRoleAccessDestroyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/{parent_lookup_feature_flag_id}/role_access/{id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FeatureFlagsRoleAccessDestroyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  featureFlagsRoleAccessList(
    req: operations.FeatureFlagsRoleAccessListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsRoleAccessListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsRoleAccessListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/{parent_lookup_feature_flag_id}/role_access/", req.pathParams);
    
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
        const res: operations.FeatureFlagsRoleAccessListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.paginatedFeatureFlagRoleAccessList = plainToInstance(
                shared.PaginatedFeatureFlagRoleAccessList,
                httpRes?.data as shared.PaginatedFeatureFlagRoleAccessList,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  featureFlagsRoleAccessRetrieve(
    req: operations.FeatureFlagsRoleAccessRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsRoleAccessRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsRoleAccessRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/{parent_lookup_feature_flag_id}/role_access/{id}/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FeatureFlagsRoleAccessRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlagRoleAccess = plainToInstance(
                shared.FeatureFlagRoleAccessOutput,
                httpRes?.data as shared.FeatureFlagRoleAccessOutput,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsUpdate - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsUpdate(
    req: operations.FeatureFlagsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/{id}/", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.FeatureFlagsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlag = plainToInstance(
                shared.FeatureFlag,
                httpRes?.data as shared.FeatureFlag,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * featureFlagsUserBlastRadiusCreate - Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
   * 
   * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
  **/
  featureFlagsUserBlastRadiusCreate(
    req: operations.FeatureFlagsUserBlastRadiusCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FeatureFlagsUserBlastRadiusCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FeatureFlagsUserBlastRadiusCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{project_id}/feature_flags/user_blast_radius/", req.pathParams);

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.FeatureFlagsUserBlastRadiusCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.featureFlag = plainToInstance(
                shared.FeatureFlag,
                httpRes?.data as shared.FeatureFlag,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
