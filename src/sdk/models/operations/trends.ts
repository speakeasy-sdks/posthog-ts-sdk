import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class TrendsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum TrendsFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class TrendsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: TrendsFormatEnum;
}

export class TrendsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrendsPathParams;

  @SpeakeasyMetadata()
  queryParams: TrendsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Trend;
}

export class TrendsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trendResults?: shared.TrendResults;
}