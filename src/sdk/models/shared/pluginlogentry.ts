import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

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
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "instance_id" })
  instanceId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "plugin_config_id" })
  pluginConfigId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "plugin_id" })
  pluginId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: PluginLogEntrySourceEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  timestamp: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: PluginLogEntryTypeEnum;
}