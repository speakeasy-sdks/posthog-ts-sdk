import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DomainsDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class DomainsDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DomainsDestroyPathParams;
}

export class DomainsDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}