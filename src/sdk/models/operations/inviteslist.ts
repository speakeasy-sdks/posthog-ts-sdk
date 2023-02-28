import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class InvitesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class InvitesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class InvitesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InvitesListPathParams;

  @SpeakeasyMetadata()
  queryParams: InvitesListQueryParams;
}

export class InvitesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedOrganizationInviteList?: shared.PaginatedOrganizationInviteList;

  @SpeakeasyMetadata()
  statusCode: number;
}