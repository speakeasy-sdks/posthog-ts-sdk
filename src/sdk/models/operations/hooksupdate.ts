import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class HooksUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class HooksUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  hook?: shared.HookInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  hook1?: shared.HookInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  hook2?: shared.HookInput;
}

export class HooksUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HooksUpdatePathParams;

  @SpeakeasyMetadata()
  request: HooksUpdateRequests;
}

export class HooksUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  hook?: shared.Hook;

  @SpeakeasyMetadata()
  statusCode: number;
}