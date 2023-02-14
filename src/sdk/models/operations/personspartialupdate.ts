import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PersonsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsPartialUpdateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsPartialUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsPartialUpdateFormatEnum;
}

export class PersonsPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedPerson?: shared.PatchedPersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedPerson1?: shared.PatchedPersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedPerson2?: shared.PatchedPersonInput;
}

export class PersonsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsPartialUpdateQueryParams;

  @SpeakeasyMetadata()
  request?: PersonsPartialUpdateRequests;
}

export class PersonsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}