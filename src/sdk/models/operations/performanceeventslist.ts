import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PerformanceEventsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PerformanceEventsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class PerformanceEventsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PerformanceEventsListPathParams;

  @SpeakeasyMetadata()
  queryParams: PerformanceEventsListQueryParams;
}

export class PerformanceEventsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedPerformanceEventList?: shared.PaginatedPerformanceEventList;

  @SpeakeasyMetadata()
  statusCode: number;
}