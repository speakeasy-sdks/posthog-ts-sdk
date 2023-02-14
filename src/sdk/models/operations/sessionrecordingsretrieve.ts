import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SessionRecordingsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class SessionRecordingsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionRecordingsRetrievePathParams;
}

export class SessionRecordingsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}