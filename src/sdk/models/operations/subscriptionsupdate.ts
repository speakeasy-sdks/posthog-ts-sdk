import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class SubscriptionsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class SubscriptionsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  subscription?: shared.SubscriptionInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  subscription1?: shared.SubscriptionInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  subscription2?: shared.SubscriptionInput;
}

export class SubscriptionsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubscriptionsUpdatePathParams;

  @SpeakeasyMetadata()
  request: SubscriptionsUpdateRequests;
}

export class SubscriptionsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscription?: shared.Subscription;
}