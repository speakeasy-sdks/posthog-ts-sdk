import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PluginConfig } from "./pluginconfig";


export class PaginatedPluginConfigList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: PluginConfig })
  results?: PluginConfig[];
}