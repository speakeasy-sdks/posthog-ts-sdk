import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class RolesCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class RolesCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  role?: shared.RoleInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  role1?: shared.RoleInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  role2?: shared.RoleInput;
}

export class RolesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RolesCreatePathParams;

  @SpeakeasyMetadata()
  request: RolesCreateRequests;
}

export class RolesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  role?: shared.Role;

  @SpeakeasyMetadata()
  statusCode: number;
}