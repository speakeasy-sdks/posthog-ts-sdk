import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class InvitesDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class InvitesDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InvitesDestroyPathParams;
}

export class InvitesDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}