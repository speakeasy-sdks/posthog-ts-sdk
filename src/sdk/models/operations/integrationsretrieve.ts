import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class IntegrationsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class IntegrationsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IntegrationsRetrievePathParams;
}

export class IntegrationsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  integration?: shared.Integration;

  @SpeakeasyMetadata()
  statusCode: number;
}