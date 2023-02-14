import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PluginConfigsDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PluginConfigsDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginConfigsDestroyPathParams;
}

export class PluginConfigsDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}