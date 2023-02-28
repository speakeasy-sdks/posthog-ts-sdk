import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ResourceAccessUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class ResourceAccessUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  organizationResourceAccess?: shared.OrganizationResourceAccessInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  organizationResourceAccess1?: shared.OrganizationResourceAccessInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  organizationResourceAccess2?: shared.OrganizationResourceAccessInput;
}

export class ResourceAccessUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResourceAccessUpdatePathParams;

  @SpeakeasyMetadata()
  request: ResourceAccessUpdateRequests;
}

export class ResourceAccessUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationResourceAccess?: shared.OrganizationResourceAccess;

  @SpeakeasyMetadata()
  statusCode: number;
}