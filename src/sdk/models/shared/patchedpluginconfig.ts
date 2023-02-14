import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchedPluginConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled, form, name=enabled;, multipart_form, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=error, form, name=error;json=true, multipart_form, name=error;json=true" })
  error?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=order, form, name=order;, multipart_form, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=plugin, form, name=plugin;, multipart_form, name=plugin" })
  plugin?: number;
}