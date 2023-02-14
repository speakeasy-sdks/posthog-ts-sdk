import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class DashboardsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class DashboardsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class DashboardsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardsListPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardsListQueryParams;
}

export class DashboardsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedDashboardList?: shared.PaginatedDashboardList;

  @SpeakeasyMetadata()
  statusCode: number;
}