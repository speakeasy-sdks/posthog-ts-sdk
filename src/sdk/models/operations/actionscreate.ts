import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ActionsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum ActionsCreateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class ActionsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: ActionsCreateFormatEnum;
}

export class ActionsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  action?: shared.ActionInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  action1?: shared.ActionInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  action2?: shared.ActionInput;
}

export class ActionsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsCreateQueryParams;

  @SpeakeasyMetadata()
  request?: ActionsCreateRequests;
}

export class ActionsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  action?: shared.Action;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}