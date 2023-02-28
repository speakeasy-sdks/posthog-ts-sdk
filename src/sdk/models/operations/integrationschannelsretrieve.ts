import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class IntegrationsChannelsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class IntegrationsChannelsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IntegrationsChannelsRetrievePathParams;
}

export class IntegrationsChannelsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  integration?: shared.Integration;

  @SpeakeasyMetadata()
  statusCode: number;
}