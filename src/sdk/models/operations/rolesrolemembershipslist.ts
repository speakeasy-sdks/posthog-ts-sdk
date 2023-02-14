import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class RolesRoleMembershipsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_role_id" })
  parentLookupRoleId: string;
}

export class RolesRoleMembershipsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class RolesRoleMembershipsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RolesRoleMembershipsListPathParams;

  @SpeakeasyMetadata()
  queryParams: RolesRoleMembershipsListQueryParams;
}

export class RolesRoleMembershipsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedRoleMembershipList?: shared.PaginatedRoleMembershipList;

  @SpeakeasyMetadata()
  statusCode: number;
}