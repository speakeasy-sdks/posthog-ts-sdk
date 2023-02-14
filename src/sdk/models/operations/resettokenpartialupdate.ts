import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ResetTokenPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export class ResetTokenPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedTeam?: shared.PatchedTeamInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedTeam1?: shared.PatchedTeamInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedTeam2?: shared.PatchedTeamInput;
}

export class ResetTokenPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetTokenPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: ResetTokenPartialUpdateRequests;
}

export class ResetTokenPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  team?: shared.Team;
}