import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ActionsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum ActionsUpdateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class ActionsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: ActionsUpdateFormatEnum;
}

export class ActionsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  action?: shared.ActionInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  action1?: shared.ActionInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  action2?: shared.ActionInput;
}

export class ActionsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsUpdateQueryParams;

  @SpeakeasyMetadata()
  request?: ActionsUpdateRequests;
}

export class ActionsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  action?: shared.Action;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}