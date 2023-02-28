import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PluginConfig } from "./pluginconfig";
import { Expose, Type } from "class-transformer";


export class PaginatedPluginConfigList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: PluginConfig })
  @Expose({ name: "results" })
  @Type(() => PluginConfig)
  results?: PluginConfig[];
}