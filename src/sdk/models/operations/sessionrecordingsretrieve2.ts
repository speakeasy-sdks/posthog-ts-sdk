import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class SessionRecordingsRetrieve2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class SessionRecordingsRetrieve2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionRecordingsRetrieve2PathParams;
}

export class SessionRecordingsRetrieve2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}