import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class InsightsFunnelRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsFunnelRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsFunnelRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsFunnelRetrieveFormatEnum;
}

export class InsightsFunnelRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsFunnelRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsFunnelRetrieveQueryParams;
}

export class InsightsFunnelRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insight?: shared.Insight;

  @SpeakeasyMetadata()
  statusCode: number;
}