import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class InsightsPathCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsPathCreateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsPathCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsPathCreateFormatEnum;
}

export class InsightsPathCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsPathCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsPathCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.InsightInput;
}

export class InsightsPathCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insight?: shared.Insight;

  @SpeakeasyMetadata()
  statusCode: number;
}