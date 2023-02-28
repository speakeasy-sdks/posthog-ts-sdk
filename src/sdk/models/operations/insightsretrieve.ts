import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class InsightsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsRetrieveFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from_dashboard" })
  fromDashboard?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refresh" })
  refresh?: boolean;
}

export class InsightsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsRetrieveQueryParams;
}

export class InsightsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insight?: shared.Insight;

  @SpeakeasyMetadata()
  statusCode: number;
}