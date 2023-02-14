import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PluginConfigsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PluginConfigsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class PluginConfigsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginConfigsListPathParams;

  @SpeakeasyMetadata()
  queryParams: PluginConfigsListQueryParams;
}

export class PluginConfigsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedPluginConfigList?: shared.PaginatedPluginConfigList;

  @SpeakeasyMetadata()
  statusCode: number;
}