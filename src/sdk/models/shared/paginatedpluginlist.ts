import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Plugin } from "./plugin";
import { Expose, Type } from "class-transformer";


export class PaginatedPluginList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Plugin })
  @Expose({ name: "results" })
  @Type(() => Plugin)
  results?: Plugin[];
}