import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class EventsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum EventsRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class EventsRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: EventsRetrieveFormatEnum;
}

export class EventsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EventsRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: EventsRetrieveQueryParams;
}

export class EventsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  clickhouseEvent?: shared.ClickhouseEvent;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}