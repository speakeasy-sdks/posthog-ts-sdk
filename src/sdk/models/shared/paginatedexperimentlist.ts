import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Experiment } from "./experiment";
import { Expose, Type } from "class-transformer";


export class PaginatedExperimentList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Experiment })
  @Expose({ name: "results" })
  @Type(() => Experiment)
  results?: Experiment[];
}