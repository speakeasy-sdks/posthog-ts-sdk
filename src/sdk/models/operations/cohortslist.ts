import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CohortsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class CohortsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class CohortsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CohortsListPathParams;

  @SpeakeasyMetadata()
  queryParams: CohortsListQueryParams;
}

export class CohortsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedCohortList?: shared.PaginatedCohortList;

  @SpeakeasyMetadata()
  statusCode: number;
}