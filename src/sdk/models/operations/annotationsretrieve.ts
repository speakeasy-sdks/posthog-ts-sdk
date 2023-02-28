import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class AnnotationsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class AnnotationsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AnnotationsRetrievePathParams;
}

export class AnnotationsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  annotation?: shared.Annotation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}