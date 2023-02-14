import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PluginConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled, form, name=enabled;, multipart_form, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=error, form, name=error;json=true, multipart_form, name=error;json=true" })
  error?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=order, form, name=order;, multipart_form, name=order" })
  order: number;

  @SpeakeasyMetadata({ data: "json, name=plugin, form, name=plugin;, multipart_form, name=plugin" })
  plugin: number;
}

export class PluginConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=delivery_rate_24h" })
  deliveryRate24h: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order: number;

  @SpeakeasyMetadata({ data: "json, name=plugin" })
  plugin: number;

  @SpeakeasyMetadata({ data: "json, name=plugin_info" })
  pluginInfo: string;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: number;
}