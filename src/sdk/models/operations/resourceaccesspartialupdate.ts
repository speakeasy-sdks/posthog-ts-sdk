import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ResourceAccessPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class ResourceAccessPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedOrganizationResourceAccess?: shared.PatchedOrganizationResourceAccessInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedOrganizationResourceAccess1?: shared.PatchedOrganizationResourceAccessInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedOrganizationResourceAccess2?: shared.PatchedOrganizationResourceAccessInput;
}

export class ResourceAccessPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResourceAccessPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: ResourceAccessPartialUpdateRequests;
}

export class ResourceAccessPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationResourceAccess?: shared.OrganizationResourceAccess;

  @SpeakeasyMetadata()
  statusCode: number;
}