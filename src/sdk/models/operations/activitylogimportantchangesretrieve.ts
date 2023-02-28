import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ActivityLogImportantChangesRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class ActivityLogImportantChangesRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityLogImportantChangesRetrievePathParams;
}

export class ActivityLogImportantChangesRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityLog?: shared.ActivityLog;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}