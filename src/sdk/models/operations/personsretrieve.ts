import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PersonsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsRetrieveFormatEnum;
}

export class PersonsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsRetrieveQueryParams;
}

export class PersonsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}