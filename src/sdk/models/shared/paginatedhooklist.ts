import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Hook } from "./hook";


export class PaginatedHookList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Hook })
  results?: Hook[];
}