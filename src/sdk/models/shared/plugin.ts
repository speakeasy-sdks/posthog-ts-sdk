import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum PluginPluginTypeEnum {
    Local = "local",
    Custom = "custom",
    Repository = "repository",
    Source = "source",
    Unknown = "",
    Null = "null"
}

export class PluginInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities, form, name=capabilities;json=true, multipart_form, name=capabilities;json=true" })
  capabilities?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=config_schema, form, name=config_schema;json=true, multipart_form, name=config_schema;json=true" })
  configSchema?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description, form, name=description;, multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=icon, form, name=icon;, multipart_form, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=is_global, form, name=is_global;, multipart_form, name=is_global" })
  isGlobal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metrics, form, name=metrics;json=true, multipart_form, name=metrics;json=true" })
  metrics?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=plugin_type, form, name=plugin_type;, multipart_form, name=plugin_type" })
  pluginType?: PluginPluginTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=public_jobs, form, name=public_jobs;json=true, multipart_form, name=public_jobs;json=true" })
  publicJobs?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=tag, form, name=tag;, multipart_form, name=tag" })
  tag?: string;
}

export class Plugin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=config_schema" })
  configSchema?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=is_global" })
  isGlobal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latest_tag" })
  latestTag: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId: string;

  @SpeakeasyMetadata({ data: "json, name=organization_name" })
  organizationName: string;

  @SpeakeasyMetadata({ data: "json, name=plugin_type" })
  pluginType?: PluginPluginTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=public_jobs" })
  publicJobs?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}