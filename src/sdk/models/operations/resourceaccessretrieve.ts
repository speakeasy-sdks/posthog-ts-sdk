import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ResourceAccessRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class ResourceAccessRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResourceAccessRetrievePathParams;
}

export class ResourceAccessRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationResourceAccess?: shared.OrganizationResourceAccess;

  @SpeakeasyMetadata()
  statusCode: number;
}