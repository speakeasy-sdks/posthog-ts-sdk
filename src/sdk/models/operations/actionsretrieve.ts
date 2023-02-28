import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ActionsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum ActionsRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class ActionsRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: ActionsRetrieveFormatEnum;
}

export class ActionsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsRetrieveQueryParams;
}

export class ActionsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  action?: shared.Action;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}