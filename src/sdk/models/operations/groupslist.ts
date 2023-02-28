import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GroupsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class GroupsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_type_index" })
  groupTypeIndex: number;
}

export class GroupsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsListPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsListQueryParams;
}

export class GroupsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedGroupList?: shared.PaginatedGroupList;

  @SpeakeasyMetadata()
  statusCode: number;
}