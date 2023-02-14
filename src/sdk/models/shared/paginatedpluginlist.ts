import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Plugin } from "./plugin";


export class PaginatedPluginList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Plugin })
  results?: Plugin[];
}