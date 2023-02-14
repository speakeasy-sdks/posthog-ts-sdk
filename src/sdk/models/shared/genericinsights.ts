import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FilterAction } from "./filteraction";
import { FilterEvent } from "./filterevent";
import { Property } from "./property";


export class GenericInsights extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: FilterAction })
  actions?: FilterAction[];

  @SpeakeasyMetadata({ data: "json, name=date_from" })
  dateFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=date_to" })
  dateTo?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: FilterEvent })
  events?: FilterEvent[];

  @SpeakeasyMetadata({ data: "json, name=filter_test_accounts" })
  filterTestAccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Property;
}