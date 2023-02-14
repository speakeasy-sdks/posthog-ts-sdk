import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ActionsCountRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum ActionsCountRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class ActionsCountRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: ActionsCountRetrieveFormatEnum;
}

export class ActionsCountRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsCountRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsCountRetrieveQueryParams;
}

export class ActionsCountRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  action?: shared.Action;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}