import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class DomainsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class DomainsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class DomainsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DomainsListPathParams;

  @SpeakeasyMetadata()
  queryParams: DomainsListQueryParams;
}

export class DomainsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedOrganizationDomainList?: shared.PaginatedOrganizationDomainList;

  @SpeakeasyMetadata()
  statusCode: number;
}