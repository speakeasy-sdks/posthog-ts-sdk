import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PluginsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class PluginsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class PluginsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginsListPathParams;

  @SpeakeasyMetadata()
  queryParams: PluginsListQueryParams;
}

export class PluginsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedPluginList?: shared.PaginatedPluginList;

  @SpeakeasyMetadata()
  statusCode: number;
}