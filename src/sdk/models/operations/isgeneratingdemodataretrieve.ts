import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class IsGeneratingDemoDataRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export class IsGeneratingDemoDataRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IsGeneratingDemoDataRetrievePathParams;
}

export class IsGeneratingDemoDataRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  team?: shared.Team;
}