import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FilterAction } from "./filteraction";
import { FilterEvent } from "./filterevent";
import { Property } from "./property";
import { Expose, Type } from "class-transformer";

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
  @SpeakeasyMetadata({ elemType: FilterAction })
  @Expose({ name: "actions" })
  @Type(() => FilterAction)
  actions?: FilterAction[];

  @SpeakeasyMetadata()
  @Expose({ name: "breakdown" })
  breakdown?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "breakdown_type" })
  breakdownType?: TrendBreakdownTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "compare" })
  compare?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "date_from" })
  dateFrom?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "date_to" })
  dateTo?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "display" })
  display?: TrendDisplayEnum;

  @SpeakeasyMetadata({ elemType: FilterEvent })
  @Expose({ name: "events" })
  @Type(() => FilterEvent)
  events?: FilterEvent[];

  @SpeakeasyMetadata()
  @Expose({ name: "filter_test_accounts" })
  filterTestAccounts?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "formula" })
  formula?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  @Type(() => Property)
  properties?: Property;
}