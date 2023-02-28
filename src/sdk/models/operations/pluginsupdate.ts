import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PluginsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class PluginsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  plugin?: shared.PluginInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  plugin1?: shared.PluginInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  plugin2?: shared.PluginInput;
}

export class PluginsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginsUpdatePathParams;

  @SpeakeasyMetadata()
  request?: PluginsUpdateRequests;
}

export class PluginsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  plugin?: shared.Plugin;

  @SpeakeasyMetadata()
  statusCode: number;
}