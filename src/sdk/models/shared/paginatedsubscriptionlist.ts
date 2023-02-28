import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Subscription } from "./subscription";
import { Expose, Type } from "class-transformer";


export class PaginatedSubscriptionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Subscription })
  @Expose({ name: "results" })
  @Type(() => Subscription)
  results?: Subscription[];
}