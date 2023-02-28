import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DomainsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class DomainsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  organizationDomain?: shared.OrganizationDomainInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  organizationDomain1?: shared.OrganizationDomainInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  organizationDomain2?: shared.OrganizationDomainInput;
}

export class DomainsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DomainsCreatePathParams;

  @SpeakeasyMetadata()
  request: DomainsCreateRequests;
}

export class DomainsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationDomain?: shared.OrganizationDomain;

  @SpeakeasyMetadata()
  statusCode: number;
}