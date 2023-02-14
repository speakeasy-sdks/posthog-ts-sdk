import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FilterAction } from "./filteraction";
import { FilterEvent } from "./filterevent";
import { FunnelExclusion } from "./funnelexclusion";
import { Property } from "./property";

export enum FunnelBreakdownTypeEnum {
    Event = "event",
    Person = "person",
    Cohort = "cohort",
    Group = "group",
    Session = "session",
    Hogql = "hogql"
}
export enum FunnelFunnelOrderTypeEnum {
    Strict = "strict",
    Unordered = "unordered",
    Ordered = "ordered"
}
export enum FunnelFunnelVizTypeEnum {
    Trends = "trends",
    TimeToConvert = "time_to_convert",
    Steps = "steps"
}
export enum FunnelFunnelWindowIntervalTypeEnum {
    Day = "DAY",
    Minute = "MINUTE",
    Hour = "HOUR",
    Week = "WEEK",
    Month = "MONTH"
}

export class Funnel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: FilterAction })
  actions?: FilterAction[];

  @SpeakeasyMetadata({ data: "json, name=aggregation_group_type_index" })
  aggregationGroupTypeIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=breakdown" })
  breakdown?: string;

  @SpeakeasyMetadata({ data: "json, name=breakdown_limit" })
  breakdownLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=breakdown_type" })
  breakdownType?: FunnelBreakdownTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=date_from" })
  dateFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=date_to" })
  dateTo?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: FilterEvent })
  events?: FilterEvent[];

  @SpeakeasyMetadata({ data: "json, name=exclusions", elemType: FunnelExclusion })
  exclusions?: FunnelExclusion[];

  @SpeakeasyMetadata({ data: "json, name=filter_test_accounts" })
  filterTestAccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=funnel_order_type" })
  funnelOrderType?: FunnelFunnelOrderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=funnel_viz_type" })
  funnelVizType?: FunnelFunnelVizTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=funnel_window_days" })
  funnelWindowDays?: number;

  @SpeakeasyMetadata({ data: "json, name=funnel_window_interval" })
  funnelWindowInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=funnel_window_interval_type" })
  funnelWindowIntervalType?: FunnelFunnelWindowIntervalTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Property;
}