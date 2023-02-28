import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class SubscriptionsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class SubscriptionsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class SubscriptionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubscriptionsListPathParams;

  @SpeakeasyMetadata()
  queryParams: SubscriptionsListQueryParams;
}

export class SubscriptionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedSubscriptionList?: shared.PaginatedSubscriptionList;

  @SpeakeasyMetadata()
  statusCode: number;
}