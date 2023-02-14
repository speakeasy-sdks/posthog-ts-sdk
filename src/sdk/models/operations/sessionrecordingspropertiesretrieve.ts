import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SessionRecordingsPropertiesRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class SessionRecordingsPropertiesRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionRecordingsPropertiesRetrievePathParams;
}

export class SessionRecordingsPropertiesRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}