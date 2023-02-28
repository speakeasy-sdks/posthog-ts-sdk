import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PluginConfigsJobCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PluginConfigsJobCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  pluginConfig?: shared.PluginConfigInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  pluginConfig1?: shared.PluginConfigInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  pluginConfig2?: shared.PluginConfigInput;
}

export class PluginConfigsJobCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginConfigsJobCreatePathParams;

  @SpeakeasyMetadata()
  request: PluginConfigsJobCreateRequests;
}

export class PluginConfigsJobCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pluginConfig?: shared.PluginConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}