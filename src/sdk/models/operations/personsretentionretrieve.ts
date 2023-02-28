import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PersonsRetentionRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsRetentionRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsRetentionRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsRetentionRetrieveFormatEnum;
}

export class PersonsRetentionRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsRetentionRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsRetentionRetrieveQueryParams;
}

export class PersonsRetentionRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}