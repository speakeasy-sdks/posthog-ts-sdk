import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export class PartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedTeam?: shared.PatchedTeamInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedTeam1?: shared.PatchedTeamInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedTeam2?: shared.PatchedTeamInput;
}

export class PartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: PartialUpdateRequests;
}

export class PartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  team?: shared.Team;
}