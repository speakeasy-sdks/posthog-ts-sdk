import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Cohort } from "./cohort";
import { Expose, Type } from "class-transformer";


export class PaginatedCohortList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Cohort })
  @Expose({ name: "results" })
  @Type(() => Cohort)
  results?: Cohort[];
}