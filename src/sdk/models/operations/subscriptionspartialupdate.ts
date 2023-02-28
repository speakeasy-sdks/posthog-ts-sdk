import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class SubscriptionsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class SubscriptionsPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedSubscription?: shared.PatchedSubscriptionInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedSubscription1?: shared.PatchedSubscriptionInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedSubscription2?: shared.PatchedSubscriptionInput;
}

export class SubscriptionsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubscriptionsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: SubscriptionsPartialUpdateRequests;
}

export class SubscriptionsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscription?: shared.Subscription;
}