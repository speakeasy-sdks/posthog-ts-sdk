import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PluginConfigsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PluginConfigsPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedPluginConfig?: shared.PatchedPluginConfigInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedPluginConfig1?: shared.PatchedPluginConfigInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedPluginConfig2?: shared.PatchedPluginConfigInput;
}

export class PluginConfigsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginConfigsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: PluginConfigsPartialUpdateRequests;
}

export class PluginConfigsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pluginConfig?: shared.PluginConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}