import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PatchedPluginConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=enabled, multipart_form, name=enabled" })
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=error;json=true, multipart_form, name=error;json=true" })
  @Expose({ name: "error" })
  error?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=order, multipart_form, name=order" })
  @Expose({ name: "order" })
  order?: number;

  @SpeakeasyMetadata({ data: "form, name=plugin, multipart_form, name=plugin" })
  @Expose({ name: "plugin" })
  plugin?: number;
}