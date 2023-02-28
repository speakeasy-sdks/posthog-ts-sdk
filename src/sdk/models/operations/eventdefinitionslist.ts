import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class EventDefinitionsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class EventDefinitionsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class EventDefinitionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EventDefinitionsListPathParams;

  @SpeakeasyMetadata()
  queryParams: EventDefinitionsListQueryParams;
}

export class EventDefinitionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedEventDefinitionList?: shared.PaginatedEventDefinitionList;

  @SpeakeasyMetadata()
  statusCode: number;
}