import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class InsightsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsListFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_by" })
  createdBy?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsListFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short_id" })
  shortId?: string;
}

export class InsightsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsListPathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsListQueryParams;
}

export class InsightsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedInsightList?: shared.PaginatedInsightList;

  @SpeakeasyMetadata()
  statusCode: number;
}