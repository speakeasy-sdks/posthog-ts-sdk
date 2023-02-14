import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class IngestionWarningsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class IngestionWarningsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IngestionWarningsRetrievePathParams;
}

export class IngestionWarningsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}