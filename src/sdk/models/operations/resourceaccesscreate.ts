import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ResourceAccessCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class ResourceAccessCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  organizationResourceAccess?: shared.OrganizationResourceAccessInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  organizationResourceAccess1?: shared.OrganizationResourceAccessInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  organizationResourceAccess2?: shared.OrganizationResourceAccessInput;
}

export class ResourceAccessCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResourceAccessCreatePathParams;

  @SpeakeasyMetadata()
  request: ResourceAccessCreateRequests;
}

export class ResourceAccessCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationResourceAccess?: shared.OrganizationResourceAccess;

  @SpeakeasyMetadata()
  statusCode: number;
}