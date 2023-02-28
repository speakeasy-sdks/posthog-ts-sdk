import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Group } from "./group";
import { Expose, Type } from "class-transformer";


export class PaginatedGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Group })
  @Expose({ name: "results" })
  @Type(() => Group)
  results?: Group[];
}