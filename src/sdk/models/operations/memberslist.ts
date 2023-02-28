import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class MembersListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class MembersListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class MembersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembersListPathParams;

  @SpeakeasyMetadata()
  queryParams: MembersListQueryParams;
}

export class MembersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedOrganizationMemberList?: shared.PaginatedOrganizationMemberList;

  @SpeakeasyMetadata()
  statusCode: number;
}