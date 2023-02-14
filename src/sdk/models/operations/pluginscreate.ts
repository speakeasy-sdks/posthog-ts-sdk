import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PluginsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class PluginsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  plugin?: shared.PluginInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  plugin1?: shared.PluginInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  plugin2?: shared.PluginInput;
}

export class PluginsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginsCreatePathParams;

  @SpeakeasyMetadata()
  request?: PluginsCreateRequests;
}

export class PluginsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  plugin?: shared.Plugin;

  @SpeakeasyMetadata()
  statusCode: number;
}