import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class AnnotationsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class AnnotationsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  annotation?: shared.AnnotationInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  annotation1?: shared.AnnotationInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  annotation2?: shared.AnnotationInput;
}

export class AnnotationsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AnnotationsUpdatePathParams;

  @SpeakeasyMetadata()
  request?: AnnotationsUpdateRequests;
}

export class AnnotationsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  annotation?: shared.Annotation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}