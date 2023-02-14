import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class MembersUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user__uuid" })
  userUuid: string;
}

export class MembersUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  organizationMember?: shared.OrganizationMemberInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  organizationMember1?: shared.OrganizationMemberInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  organizationMember2?: shared.OrganizationMemberInput;
}

export class MembersUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembersUpdatePathParams;

  @SpeakeasyMetadata()
  request?: MembersUpdateRequests;
}

export class MembersUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationMember?: shared.OrganizationMember;

  @SpeakeasyMetadata()
  statusCode: number;
}