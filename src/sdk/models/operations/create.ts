import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class CreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  team?: shared.TeamInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  team1?: shared.TeamInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  team2?: shared.TeamInput;
}

export class CreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: CreateRequests;
}

export class CreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  team?: shared.Team;
}