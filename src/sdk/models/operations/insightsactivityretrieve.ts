import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class InsightsActivityRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsActivityRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsActivityRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsActivityRetrieveFormatEnum;
}

export class InsightsActivityRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsActivityRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsActivityRetrieveQueryParams;
}

export class InsightsActivityRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insight?: shared.Insight;

  @SpeakeasyMetadata()
  statusCode: number;
}