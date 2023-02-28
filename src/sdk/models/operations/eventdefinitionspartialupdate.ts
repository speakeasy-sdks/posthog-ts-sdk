import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class EventDefinitionsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class EventDefinitionsPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedEventDefinition?: shared.PatchedEventDefinitionInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedEventDefinition1?: shared.PatchedEventDefinitionInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedEventDefinition2?: shared.PatchedEventDefinitionInput;
}

export class EventDefinitionsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EventDefinitionsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: EventDefinitionsPartialUpdateRequests;
}

export class EventDefinitionsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventDefinition?: shared.EventDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}