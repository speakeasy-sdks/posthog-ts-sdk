import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class IsGeneratingDemoData {
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
   * isGeneratingDemoDataRetrieve - Projects for the current organization.
  **/
  isGeneratingDemoDataRetrieve(
    req: operations.IsGeneratingDemoDataRetrieveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IsGeneratingDemoDataRetrieveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IsGeneratingDemoDataRetrieveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/projects/{id}/is_generating_demo_data/", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.IsGeneratingDemoDataRetrieveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.team = plainToInstance(
                shared.Team,
                httpRes?.data as shared.Team,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
