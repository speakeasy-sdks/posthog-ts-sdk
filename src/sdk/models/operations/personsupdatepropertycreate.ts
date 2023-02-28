import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PersonsUpdatePropertyCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsUpdatePropertyCreateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsUpdatePropertyCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsUpdatePropertyCreateFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=value" })
  value: any;
}

export class PersonsUpdatePropertyCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  person?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  person1?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  person2?: shared.PersonInput;
}

export class PersonsUpdatePropertyCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsUpdatePropertyCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsUpdatePropertyCreateQueryParams;

  @SpeakeasyMetadata()
  request?: PersonsUpdatePropertyCreateRequests;
}

export class PersonsUpdatePropertyCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}