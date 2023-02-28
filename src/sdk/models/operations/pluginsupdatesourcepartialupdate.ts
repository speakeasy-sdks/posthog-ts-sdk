import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PluginsUpdateSourcePartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class PluginsUpdateSourcePartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedPlugin?: shared.PatchedPluginInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedPlugin1?: shared.PatchedPluginInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedPlugin2?: shared.PatchedPluginInput;
}

export class PluginsUpdateSourcePartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PluginsUpdateSourcePartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: PluginsUpdateSourcePartialUpdateRequests;
}

export class PluginsUpdateSourcePartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  plugin?: shared.Plugin;

  @SpeakeasyMetadata()
  statusCode: number;
}