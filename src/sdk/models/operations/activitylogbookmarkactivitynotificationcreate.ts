import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ActivityLogBookmarkActivityNotificationCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class ActivityLogBookmarkActivityNotificationCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  activityLog?: shared.ActivityLogInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  activityLog1?: shared.ActivityLogInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  activityLog2?: shared.ActivityLogInput;
}

export class ActivityLogBookmarkActivityNotificationCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivityLogBookmarkActivityNotificationCreatePathParams;

  @SpeakeasyMetadata()
  request: ActivityLogBookmarkActivityNotificationCreateRequests;
}

export class ActivityLogBookmarkActivityNotificationCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityLog?: shared.ActivityLog;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}