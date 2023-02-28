import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FilterAction } from "./filteraction";
import { FilterEvent } from "./filterevent";
import { Property } from "./property";
import { Expose, Type } from "class-transformer";


export class GenericInsights extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FilterAction })
  @Expose({ name: "actions" })
  @Type(() => FilterAction)
  actions?: FilterAction[];

  @SpeakeasyMetadata()
  @Expose({ name: "date_from" })
  dateFrom?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date_to" })
  dateTo?: string;

  @SpeakeasyMetadata({ elemType: FilterEvent })
  @Expose({ name: "events" })
  @Type(() => FilterEvent)
  events?: FilterEvent[];

  @SpeakeasyMetadata()
  @Expose({ name: "filter_test_accounts" })
  filterTestAccounts?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  @Type(() => Property)
  properties?: Property;
}