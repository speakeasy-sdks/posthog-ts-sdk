import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PersonsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsUpdateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsUpdateFormatEnum;
}

export class PersonsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  person?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  person1?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  person2?: shared.PersonInput;
}

export class PersonsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsUpdateQueryParams;

  @SpeakeasyMetadata()
  request?: PersonsUpdateRequests;
}

export class PersonsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}