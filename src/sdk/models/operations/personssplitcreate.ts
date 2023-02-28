import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PersonsSplitCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsSplitCreateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsSplitCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsSplitCreateFormatEnum;
}

export class PersonsSplitCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  person?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  person1?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  person2?: shared.PersonInput;
}

export class PersonsSplitCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsSplitCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsSplitCreateQueryParams;

  @SpeakeasyMetadata()
  request?: PersonsSplitCreateRequests;
}

export class PersonsSplitCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}