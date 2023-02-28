import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DomainsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class DomainsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DomainsRetrievePathParams;
}

export class DomainsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationDomain?: shared.OrganizationDomain;

  @SpeakeasyMetadata()
  statusCode: number;
}