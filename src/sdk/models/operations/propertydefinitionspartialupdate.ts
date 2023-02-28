import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PropertyDefinitionsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PropertyDefinitionsPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedPropertyDefinition?: shared.PatchedPropertyDefinitionInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedPropertyDefinition1?: shared.PatchedPropertyDefinitionInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedPropertyDefinition2?: shared.PatchedPropertyDefinitionInput;
}

export class PropertyDefinitionsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PropertyDefinitionsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: PropertyDefinitionsPartialUpdateRequests;
}

export class PropertyDefinitionsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  propertyDefinition?: shared.PropertyDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}