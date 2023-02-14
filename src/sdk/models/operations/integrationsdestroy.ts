import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class IntegrationsDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class IntegrationsDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IntegrationsDestroyPathParams;
}

export class IntegrationsDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}