import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GroupsTypesUpdateMetadataPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class GroupsTypesUpdateMetadataPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedGroupType?: shared.PatchedGroupTypeInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedGroupType1?: shared.PatchedGroupTypeInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedGroupType2?: shared.PatchedGroupTypeInput;
}

export class GroupsTypesUpdateMetadataPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsTypesUpdateMetadataPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: GroupsTypesUpdateMetadataPartialUpdateRequests;
}

export class GroupsTypesUpdateMetadataPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupType?: shared.GroupType;

  @SpeakeasyMetadata()
  statusCode: number;
}