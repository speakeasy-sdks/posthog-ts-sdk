import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class InsightsTimingCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsTimingCreateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsTimingCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsTimingCreateFormatEnum;
}

export class InsightsTimingCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsTimingCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsTimingCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.InsightInput;
}

export class InsightsTimingCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insight?: shared.Insight;

  @SpeakeasyMetadata()
  statusCode: number;
}