import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class EventsValuesRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum EventsValuesRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class EventsValuesRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: EventsValuesRetrieveFormatEnum;
}

export class EventsValuesRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EventsValuesRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: EventsValuesRetrieveQueryParams;
}

export class EventsValuesRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  clickhouseEvent?: shared.ClickhouseEvent;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}