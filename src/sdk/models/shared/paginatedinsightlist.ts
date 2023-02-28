import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Insight } from "./insight";
import { Expose, Type } from "class-transformer";


export class PaginatedInsightList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Insight })
  @Expose({ name: "results" })
  @Type(() => Insight)
  results?: Insight[];
}