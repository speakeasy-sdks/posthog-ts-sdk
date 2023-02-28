import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Hook } from "./hook";
import { Expose, Type } from "class-transformer";


export class PaginatedHookList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Hook })
  @Expose({ name: "results" })
  @Type(() => Hook)
  results?: Hook[];
}