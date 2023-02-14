import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CohortsPersonsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum CohortsPersonsRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class CohortsPersonsRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: CohortsPersonsRetrieveFormatEnum;
}

export class CohortsPersonsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CohortsPersonsRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: CohortsPersonsRetrieveQueryParams;
}

export class CohortsPersonsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cohort?: shared.Cohort;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}