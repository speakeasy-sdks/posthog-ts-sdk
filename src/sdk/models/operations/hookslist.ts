import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class HooksListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class HooksListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class HooksListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HooksListPathParams;

  @SpeakeasyMetadata()
  queryParams: HooksListQueryParams;
}

export class HooksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedHookList?: shared.PaginatedHookList;

  @SpeakeasyMetadata()
  statusCode: number;
}