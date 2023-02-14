import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class InvitesCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class InvitesCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  organizationInvite?: shared.OrganizationInviteInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  organizationInvite1?: shared.OrganizationInviteInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  organizationInvite2?: shared.OrganizationInviteInput;
}

export class InvitesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InvitesCreatePathParams;

  @SpeakeasyMetadata()
  request: InvitesCreateRequests;
}

export class InvitesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  organizationInvite?: shared.OrganizationInvite;

  @SpeakeasyMetadata()
  statusCode: number;
}