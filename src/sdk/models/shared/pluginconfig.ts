import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class PluginConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=enabled, multipart_form, name=enabled" })
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=error;json=true, multipart_form, name=error;json=true" })
  @Expose({ name: "error" })
  error?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=order, multipart_form, name=order" })
  @Expose({ name: "order" })
  order: number;

  @SpeakeasyMetadata({ data: "form, name=plugin, multipart_form, name=plugin" })
  @Expose({ name: "plugin" })
  plugin: number;
}

export class PluginConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "config" })
  config: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "delivery_rate_24h" })
  deliveryRate24h: string;

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order: number;

  @SpeakeasyMetadata()
  @Expose({ name: "plugin" })
  plugin: number;

  @SpeakeasyMetadata()
  @Expose({ name: "plugin_info" })
  pluginInfo: string;

  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId: number;
}