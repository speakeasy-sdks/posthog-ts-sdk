import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class InsightsFunnelCorrelationCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsFunnelCorrelationCreateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsFunnelCorrelationCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsFunnelCorrelationCreateFormatEnum;
}

export class InsightsFunnelCorrelationCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsFunnelCorrelationCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsFunnelCorrelationCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.InsightInput;
}

export class InsightsFunnelCorrelationCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insight?: shared.Insight;

  @SpeakeasyMetadata()
  statusCode: number;
}