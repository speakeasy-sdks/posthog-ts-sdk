import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class IntegrationsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class IntegrationsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class IntegrationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IntegrationsListPathParams;

  @SpeakeasyMetadata()
  queryParams: IntegrationsListQueryParams;
}

export class IntegrationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedIntegrationList?: shared.PaginatedIntegrationList;

  @SpeakeasyMetadata()
  statusCode: number;
}