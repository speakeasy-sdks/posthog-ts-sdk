import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FilterAction } from "./filteraction";
import { FilterEvent } from "./filterevent";
import { Property } from "./property";

export enum TrendBreakdownTypeEnum {
    Event = "event",
    Person = "person",
    Cohort = "cohort",
    Group = "group",
    Session = "session",
    Hogql = "hogql"
}
export enum TrendDisplayEnum {
    ActionsLineGraph = "ActionsLineGraph",
    ActionsLineGraphCumulative = "ActionsLineGraphCumulative",
    ActionsTable = "ActionsTable",
    ActionsPie = "ActionsPie",
    ActionsBar = "ActionsBar",
    ActionsBarValue = "ActionsBarValue",
    WorldMap = "WorldMap",
    BoldNumber = "BoldNumber"
}

export class Trend extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: FilterAction })
  actions?: FilterAction[];

  @SpeakeasyMetadata({ data: "json, name=breakdown" })
  breakdown?: string;

  @SpeakeasyMetadata({ data: "json, name=breakdown_type" })
  breakdownType?: TrendBreakdownTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=compare" })
  compare?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date_from" })
  dateFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=date_to" })
  dateTo?: string;

  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: TrendDisplayEnum;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: FilterEvent })
  events?: FilterEvent[];

  @SpeakeasyMetadata({ data: "json, name=filter_test_accounts" })
  filterTestAccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Property;
}