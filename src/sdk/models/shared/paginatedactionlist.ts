import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Action } from "./action";
import { Expose, Type } from "class-transformer";


export class PaginatedActionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Action })
  @Expose({ name: "results" })
  @Type(() => Action)
  results?: Action[];
}