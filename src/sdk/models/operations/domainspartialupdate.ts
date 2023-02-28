import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DomainsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class DomainsPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedOrganizationDomain?: shared.PatchedOrganizationDomainInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedOrganizationDomain1?: shared.PatchedOrganizationDomainInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedOrganizationDomain2?: shared.PatchedOrganizationDomainInput;
}

export class DomainsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DomainsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: DomainsPartialUpdateRequests;
}

export class DomainsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationDomain?: shared.OrganizationDomain;

  @SpeakeasyMetadata()
  statusCode: number;
}