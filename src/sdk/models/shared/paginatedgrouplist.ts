import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Group } from "./group";


export class PaginatedGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Group })
  results?: Group[];
}