import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PluginsCheckForUpdatesRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class PluginsCheckForUpdatesRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginsCheckForUpdatesRetrievePathParams;
}

export class PluginsCheckForUpdatesRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  plugin?: shared.Plugin;

  @SpeakeasyMetadata()
  statusCode: number;
}