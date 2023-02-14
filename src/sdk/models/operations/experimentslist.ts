import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ExperimentsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class ExperimentsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class ExperimentsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExperimentsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ExperimentsListQueryParams;
}

export class ExperimentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedExperimentList?: shared.PaginatedExperimentList;

  @SpeakeasyMetadata()
  statusCode: number;
}