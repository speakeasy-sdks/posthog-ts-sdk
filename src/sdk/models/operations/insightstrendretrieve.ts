import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class InsightsTrendRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsTrendRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsTrendRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsTrendRetrieveFormatEnum;
}

export class InsightsTrendRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsTrendRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsTrendRetrieveQueryParams;
}

export class InsightsTrendRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insight?: shared.Insight;

  @SpeakeasyMetadata()
  statusCode: number;
}