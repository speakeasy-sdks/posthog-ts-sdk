import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PluginConfigsRearrangePartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PluginConfigsRearrangePartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedPluginConfig?: shared.PatchedPluginConfigInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedPluginConfig1?: shared.PatchedPluginConfigInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedPluginConfig2?: shared.PatchedPluginConfigInput;
}

export class PluginConfigsRearrangePartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginConfigsRearrangePartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: PluginConfigsRearrangePartialUpdateRequests;
}

export class PluginConfigsRearrangePartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pluginConfig?: shared.PluginConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}