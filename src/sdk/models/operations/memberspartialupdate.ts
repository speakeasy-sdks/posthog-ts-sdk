import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class MembersPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user__uuid" })
  userUuid: string;
}

export class MembersPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedOrganizationMember?: shared.PatchedOrganizationMemberInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedOrganizationMember1?: shared.PatchedOrganizationMemberInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedOrganizationMember2?: shared.PatchedOrganizationMemberInput;
}

export class MembersPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MembersPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: MembersPartialUpdateRequests;
}

export class MembersPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationMember?: shared.OrganizationMember;

  @SpeakeasyMetadata()
  statusCode: number;
}