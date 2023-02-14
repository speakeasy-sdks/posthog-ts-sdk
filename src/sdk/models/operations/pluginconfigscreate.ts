import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PluginConfigsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PluginConfigsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  pluginConfig?: shared.PluginConfigInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  pluginConfig1?: shared.PluginConfigInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  pluginConfig2?: shared.PluginConfigInput;
}

export class PluginConfigsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginConfigsCreatePathParams;

  @SpeakeasyMetadata()
  request: PluginConfigsCreateRequests;
}

export class PluginConfigsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pluginConfig?: shared.PluginConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}