import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum PatchedPluginPluginTypeEnum {
    Local = "local",
    Custom = "custom",
    Repository = "repository",
    Source = "source",
    Unknown = "",
    Null = "null"
}

export class PatchedPluginInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=capabilities;json=true, multipart_form, name=capabilities;json=true" })
  @Expose({ name: "capabilities" })
  capabilities?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=config_schema;json=true, multipart_form, name=config_schema;json=true" })
  @Expose({ name: "config_schema" })
  configSchema?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=description, multipart_form, name=description" })
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=icon, multipart_form, name=icon" })
  @Expose({ name: "icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "form, name=is_global, multipart_form, name=is_global" })
  @Expose({ name: "is_global" })
  isGlobal?: boolean;

  @SpeakeasyMetadata({ data: "form, name=metrics;json=true, multipart_form, name=metrics;json=true" })
  @Expose({ name: "metrics" })
  metrics?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=plugin_type, multipart_form, name=plugin_type" })
  @Expose({ name: "plugin_type" })
  pluginType?: PatchedPluginPluginTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=public_jobs;json=true, multipart_form, name=public_jobs;json=true" })
  @Expose({ name: "public_jobs" })
  publicJobs?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=tag, multipart_form, name=tag" })
  @Expose({ name: "tag" })
  tag?: string;
}