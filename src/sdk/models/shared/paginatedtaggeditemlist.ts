import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaggedItem } from "./taggeditem";
import { Expose, Type } from "class-transformer";


export class PaginatedTaggedItemList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: TaggedItem })
  @Expose({ name: "results" })
  @Type(() => TaggedItem)
  results?: TaggedItem[];
}