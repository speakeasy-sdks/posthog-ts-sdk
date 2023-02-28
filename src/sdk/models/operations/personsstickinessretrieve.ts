import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PersonsStickinessRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsStickinessRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsStickinessRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsStickinessRetrieveFormatEnum;
}

export class PersonsStickinessRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsStickinessRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsStickinessRetrieveQueryParams;
}

export class PersonsStickinessRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}