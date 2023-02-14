import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class AppMetricsErrorDetailsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class AppMetricsErrorDetailsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppMetricsErrorDetailsRetrievePathParams;
}

export class AppMetricsErrorDetailsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}