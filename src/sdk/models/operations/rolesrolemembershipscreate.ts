import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class RolesRoleMembershipsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_role_id" })
  parentLookupRoleId: string;
}

export class RolesRoleMembershipsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  roleMembership?: shared.RoleMembershipInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  roleMembership1?: shared.RoleMembershipInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  roleMembership2?: shared.RoleMembershipInput;
}

export class RolesRoleMembershipsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RolesRoleMembershipsCreatePathParams;

  @SpeakeasyMetadata()
  request: RolesRoleMembershipsCreateRequests;
}

export class RolesRoleMembershipsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  roleMembership?: shared.RoleMembershipOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}