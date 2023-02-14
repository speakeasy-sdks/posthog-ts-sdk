import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum PluginLogEntrySourceEnum {
    System = "SYSTEM",
    Plugin = "PLUGIN",
    Console = "CONSOLE"
}
export enum PluginLogEntryTypeEnum {
    Debug = "DEBUG",
    Log = "LOG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}

export class PluginLogEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=instance_id" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=plugin_config_id" })
  pluginConfigId: number;

  @SpeakeasyMetadata({ data: "json, name=plugin_id" })
  pluginId: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: PluginLogEntrySourceEnum;

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PluginLogEntryTypeEnum;
}