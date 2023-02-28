import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ActionsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum ActionsPartialUpdateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class ActionsPartialUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: ActionsPartialUpdateFormatEnum;
}

export class ActionsPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedAction?: shared.PatchedActionInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedAction1?: shared.PatchedActionInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedAction2?: shared.PatchedActionInput;
}

export class ActionsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsPartialUpdateQueryParams;

  @SpeakeasyMetadata()
  request?: ActionsPartialUpdateRequests;
}

export class ActionsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  action?: shared.Action;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}