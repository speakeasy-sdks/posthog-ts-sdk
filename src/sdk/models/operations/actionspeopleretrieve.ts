import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ActionsPeopleRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum ActionsPeopleRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class ActionsPeopleRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: ActionsPeopleRetrieveFormatEnum;
}

export class ActionsPeopleRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsPeopleRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsPeopleRetrieveQueryParams;
}

export class ActionsPeopleRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  action?: shared.Action;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}