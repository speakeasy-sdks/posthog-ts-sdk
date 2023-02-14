import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PluginConfigsLogsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_plugin_config_id" })
  parentLookupPluginConfigId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PluginConfigsLogsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class PluginConfigsLogsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginConfigsLogsListPathParams;

  @SpeakeasyMetadata()
  queryParams: PluginConfigsLogsListQueryParams;
}

export class PluginConfigsLogsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedPluginLogEntryList?: shared.PaginatedPluginLogEntryList;

  @SpeakeasyMetadata()
  statusCode: number;
}