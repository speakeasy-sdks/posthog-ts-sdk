import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PluginLogEntry } from "./pluginlogentry";
import { Expose, Type } from "class-transformer";


export class PaginatedPluginLogEntryList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: PluginLogEntry })
  @Expose({ name: "results" })
  @Type(() => PluginLogEntry)
  results?: PluginLogEntry[];
}