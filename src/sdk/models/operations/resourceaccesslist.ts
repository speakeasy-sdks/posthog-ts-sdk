import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ResourceAccessListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class ResourceAccessListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class ResourceAccessListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResourceAccessListPathParams;

  @SpeakeasyMetadata()
  queryParams: ResourceAccessListQueryParams;
}

export class ResourceAccessListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedOrganizationResourceAccessList?: shared.PaginatedOrganizationResourceAccessList;

  @SpeakeasyMetadata()
  statusCode: number;
}