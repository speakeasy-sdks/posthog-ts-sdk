import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DomainsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class DomainsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  organizationDomain?: shared.OrganizationDomainInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  organizationDomain1?: shared.OrganizationDomainInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  organizationDomain2?: shared.OrganizationDomainInput;
}

export class DomainsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DomainsUpdatePathParams;

  @SpeakeasyMetadata()
  request: DomainsUpdateRequests;
}

export class DomainsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationDomain?: shared.OrganizationDomain;

  @SpeakeasyMetadata()
  statusCode: number;
}