import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PluginConfigsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PluginConfigsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  pluginConfig?: shared.PluginConfigInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  pluginConfig1?: shared.PluginConfigInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  pluginConfig2?: shared.PluginConfigInput;
}

export class PluginConfigsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginConfigsUpdatePathParams;

  @SpeakeasyMetadata()
  request: PluginConfigsUpdateRequests;
}

export class PluginConfigsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pluginConfig?: shared.PluginConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}