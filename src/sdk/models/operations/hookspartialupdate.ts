import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class HooksPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class HooksPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedHook?: shared.PatchedHookInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedHook1?: shared.PatchedHookInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedHook2?: shared.PatchedHookInput;
}

export class HooksPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HooksPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: HooksPartialUpdateRequests;
}

export class HooksPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  hook?: shared.Hook;

  @SpeakeasyMetadata()
  statusCode: number;
}