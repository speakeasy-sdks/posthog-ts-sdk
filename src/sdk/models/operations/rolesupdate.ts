import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class RolesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class RolesUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  role?: shared.RoleInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  role1?: shared.RoleInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  role2?: shared.RoleInput;
}

export class RolesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RolesUpdatePathParams;

  @SpeakeasyMetadata()
  request: RolesUpdateRequests;
}

export class RolesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  role?: shared.Role;

  @SpeakeasyMetadata()
  statusCode: number;
}