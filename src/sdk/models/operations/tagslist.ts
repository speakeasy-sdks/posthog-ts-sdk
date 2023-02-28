import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class TagsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class TagsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class TagsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagsListPathParams;

  @SpeakeasyMetadata()
  queryParams: TagsListQueryParams;
}

export class TagsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedTaggedItemList?: shared.PaginatedTaggedItemList;

  @SpeakeasyMetadata()
  statusCode: number;
}