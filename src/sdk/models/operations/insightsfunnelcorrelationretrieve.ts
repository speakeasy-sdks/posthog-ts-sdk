import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class InsightsFunnelCorrelationRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsFunnelCorrelationRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsFunnelCorrelationRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsFunnelCorrelationRetrieveFormatEnum;
}

export class InsightsFunnelCorrelationRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsFunnelCorrelationRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsFunnelCorrelationRetrieveQueryParams;
}

export class InsightsFunnelCorrelationRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insight?: shared.Insight;

  @SpeakeasyMetadata()
  statusCode: number;
}