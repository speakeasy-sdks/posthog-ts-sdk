import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PersonsActivityRetrieve2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsActivityRetrieve2FormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsActivityRetrieve2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsActivityRetrieve2FormatEnum;
}

export class PersonsActivityRetrieve2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsActivityRetrieve2PathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsActivityRetrieve2QueryParams;
}

export class PersonsActivityRetrieve2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}