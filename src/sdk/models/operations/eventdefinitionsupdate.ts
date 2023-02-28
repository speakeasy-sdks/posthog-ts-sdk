import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class EventDefinitionsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class EventDefinitionsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  eventDefinition?: shared.EventDefinitionInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  eventDefinition1?: shared.EventDefinitionInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  eventDefinition2?: shared.EventDefinitionInput;
}

export class EventDefinitionsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EventDefinitionsUpdatePathParams;

  @SpeakeasyMetadata()
  request: EventDefinitionsUpdateRequests;
}

export class EventDefinitionsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventDefinition?: shared.EventDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}