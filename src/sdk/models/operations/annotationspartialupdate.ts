import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class AnnotationsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class AnnotationsPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedAnnotation?: shared.PatchedAnnotationInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedAnnotation1?: shared.PatchedAnnotationInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedAnnotation2?: shared.PatchedAnnotationInput;
}

export class AnnotationsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AnnotationsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: AnnotationsPartialUpdateRequests;
}

export class AnnotationsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  annotation?: shared.Annotation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}