import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class InsightsMyLastViewedRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsMyLastViewedRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsMyLastViewedRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsMyLastViewedRetrieveFormatEnum;
}

export class InsightsMyLastViewedRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsMyLastViewedRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsMyLastViewedRetrieveQueryParams;
}

export class InsightsMyLastViewedRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insight?: shared.Insight;

  @SpeakeasyMetadata()
  statusCode: number;
}