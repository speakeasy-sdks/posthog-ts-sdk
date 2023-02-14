import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PropertyDefinitionsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PropertyDefinitionsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PropertyDefinitionsRetrievePathParams;
}

export class PropertyDefinitionsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  propertyDefinition?: shared.PropertyDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}