import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FilterAction } from "./filteraction";
import { FilterEvent } from "./filterevent";
import { FunnelExclusion } from "./funnelexclusion";
import { Property } from "./property";
import { Expose, Type } from "class-transformer";

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
  @SpeakeasyMetadata({ elemType: FilterAction })
  @Expose({ name: "actions" })
  @Type(() => FilterAction)
  actions?: FilterAction[];

  @SpeakeasyMetadata()
  @Expose({ name: "aggregation_group_type_index" })
  aggregationGroupTypeIndex?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "breakdown" })
  breakdown?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "breakdown_limit" })
  breakdownLimit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "breakdown_type" })
  breakdownType?: FunnelBreakdownTypeEnum;

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

  @SpeakeasyMetadata({ elemType: FunnelExclusion })
  @Expose({ name: "exclusions" })
  @Type(() => FunnelExclusion)
  exclusions?: FunnelExclusion[];

  @SpeakeasyMetadata()
  @Expose({ name: "filter_test_accounts" })
  filterTestAccounts?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "funnel_order_type" })
  funnelOrderType?: FunnelFunnelOrderTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "funnel_viz_type" })
  funnelVizType?: FunnelFunnelVizTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "funnel_window_days" })
  funnelWindowDays?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "funnel_window_interval" })
  funnelWindowInterval?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "funnel_window_interval_type" })
  funnelWindowIntervalType?: FunnelFunnelWindowIntervalTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  @Type(() => Property)
  properties?: Property;
}