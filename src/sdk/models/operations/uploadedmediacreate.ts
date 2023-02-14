import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UploadedMediaCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class UploadedMediaCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadedMediaCreatePathParams;
}

export class UploadedMediaCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}