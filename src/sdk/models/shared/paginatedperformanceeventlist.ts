import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PerformanceEvent } from "./performanceevent";
import { Expose, Type } from "class-transformer";


export class PaginatedPerformanceEventList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: PerformanceEvent })
  @Expose({ name: "results" })
  @Type(() => PerformanceEvent)
  results?: PerformanceEvent[];
}