import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PersonsDeletePropertyCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsDeletePropertyCreateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsDeletePropertyCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$unset" })
  dollarUnset: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsDeletePropertyCreateFormatEnum;
}

export class PersonsDeletePropertyCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  person?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  person1?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  person2?: shared.PersonInput;
}

export class PersonsDeletePropertyCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsDeletePropertyCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsDeletePropertyCreateQueryParams;

  @SpeakeasyMetadata()
  request?: PersonsDeletePropertyCreateRequests;
}

export class PersonsDeletePropertyCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}