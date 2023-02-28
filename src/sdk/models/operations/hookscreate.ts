import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class HooksCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class HooksCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  hook?: shared.HookInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  hook1?: shared.HookInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  hook2?: shared.HookInput;
}

export class HooksCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HooksCreatePathParams;

  @SpeakeasyMetadata()
  request: HooksCreateRequests;
}

export class HooksCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  hook?: shared.Hook;

  @SpeakeasyMetadata()
  statusCode: number;
}