import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PersonsLifecycleRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsLifecycleRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsLifecycleRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsLifecycleRetrieveFormatEnum;
}

export class PersonsLifecycleRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsLifecycleRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsLifecycleRetrieveQueryParams;
}

export class PersonsLifecycleRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}