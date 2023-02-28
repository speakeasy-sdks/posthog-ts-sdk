import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class AnnotationsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class AnnotationsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  annotation?: shared.AnnotationInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  annotation1?: shared.AnnotationInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  annotation2?: shared.AnnotationInput;
}

export class AnnotationsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AnnotationsCreatePathParams;

  @SpeakeasyMetadata()
  request?: AnnotationsCreateRequests;
}

export class AnnotationsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  annotation?: shared.Annotation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}