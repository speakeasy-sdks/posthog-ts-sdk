import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class MembersDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user__uuid" })
  userUuid: string;
}

export class MembersDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembersDestroyPathParams;
}

export class MembersDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}