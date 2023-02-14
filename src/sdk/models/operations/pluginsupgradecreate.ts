import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PluginsUpgradeCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class PluginsUpgradeCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  plugin?: shared.PluginInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  plugin1?: shared.PluginInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  plugin2?: shared.PluginInput;
}

export class PluginsUpgradeCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginsUpgradeCreatePathParams;

  @SpeakeasyMetadata()
  request?: PluginsUpgradeCreateRequests;
}

export class PluginsUpgradeCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  plugin?: shared.Plugin;

  @SpeakeasyMetadata()
  statusCode: number;
}