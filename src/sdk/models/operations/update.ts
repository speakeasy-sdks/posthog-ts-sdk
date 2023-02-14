import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class UpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export class UpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  team?: shared.TeamInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  team1?: shared.TeamInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  team2?: shared.TeamInput;
}

export class UpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePathParams;

  @SpeakeasyMetadata()
  request?: UpdateRequests;
}

export class UpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  team?: shared.Team;
}