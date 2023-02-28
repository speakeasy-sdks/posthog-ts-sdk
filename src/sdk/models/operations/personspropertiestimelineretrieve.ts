import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PersonsPropertiesTimelineRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsPropertiesTimelineRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsPropertiesTimelineRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsPropertiesTimelineRetrieveFormatEnum;
}

export class PersonsPropertiesTimelineRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsPropertiesTimelineRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsPropertiesTimelineRetrieveQueryParams;
}

export class PersonsPropertiesTimelineRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}