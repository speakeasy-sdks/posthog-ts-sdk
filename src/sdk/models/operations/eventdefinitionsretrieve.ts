import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class EventDefinitionsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class EventDefinitionsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EventDefinitionsRetrievePathParams;
}

export class EventDefinitionsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventDefinition?: shared.EventDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}