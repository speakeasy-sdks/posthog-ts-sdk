import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ActionsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum ActionsListFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class ActionsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: ActionsListFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class ActionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListQueryParams;
}

export class ActionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedActionList?: shared.PaginatedActionList;

  @SpeakeasyMetadata()
  statusCode: number;
}