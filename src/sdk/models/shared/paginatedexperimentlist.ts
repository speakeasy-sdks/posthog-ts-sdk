import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Experiment } from "./experiment";


export class PaginatedExperimentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Experiment })
  results?: Experiment[];
}