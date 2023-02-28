import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PluginConfigsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PluginConfigsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginConfigsRetrievePathParams;
}

export class PluginConfigsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pluginConfig?: shared.PluginConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}