import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PersonsCohortsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsCohortsRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsCohortsRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsCohortsRetrieveFormatEnum;
}

export class PersonsCohortsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsCohortsRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsCohortsRetrieveQueryParams;
}

export class PersonsCohortsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}