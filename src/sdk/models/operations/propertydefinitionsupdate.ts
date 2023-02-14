import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PropertyDefinitionsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PropertyDefinitionsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  propertyDefinition?: shared.PropertyDefinitionInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  propertyDefinition1?: shared.PropertyDefinitionInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  propertyDefinition2?: shared.PropertyDefinitionInput;
}

export class PropertyDefinitionsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PropertyDefinitionsUpdatePathParams;

  @SpeakeasyMetadata()
  request: PropertyDefinitionsUpdateRequests;
}

export class PropertyDefinitionsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  propertyDefinition?: shared.PropertyDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}