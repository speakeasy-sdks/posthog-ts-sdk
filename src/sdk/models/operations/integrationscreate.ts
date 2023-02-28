import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class IntegrationsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class IntegrationsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  integration?: shared.IntegrationInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  integration1?: shared.IntegrationInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  integration2?: shared.IntegrationInput;
}

export class IntegrationsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IntegrationsCreatePathParams;

  @SpeakeasyMetadata()
  request: IntegrationsCreateRequests;
}

export class IntegrationsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  integration?: shared.Integration;

  @SpeakeasyMetadata()
  statusCode: number;
}