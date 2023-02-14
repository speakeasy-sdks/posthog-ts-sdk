import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SessionRecordingsSnapshotsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class SessionRecordingsSnapshotsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionRecordingsSnapshotsRetrievePathParams;
}

export class SessionRecordingsSnapshotsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}