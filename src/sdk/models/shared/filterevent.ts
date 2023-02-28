import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Property } from "./property";
import { Expose, Type } from "class-transformer";

export enum FilterEventMathEnum {
    Total = "total",
    Dau = "dau",
    WeeklyActive = "weekly_active",
    MonthlyActive = "monthly_active",
    UniqueGroup = "unique_group",
    UniqueSession = "unique_session",
    Sum = "sum",
    Min = "min",
    Max = "max",
    Avg = "avg",
    Median = "median",
    P90 = "p90",
    P95 = "p95",
    P99 = "p99",
    MinCountPerActor = "min_count_per_actor",
    MaxCountPerActor = "max_count_per_actor",
    AvgCountPerActor = "avg_count_per_actor",
    MedianCountPerActor = "median_count_per_actor",
    P90CountPerActor = "p90_count_per_actor",
    P95CountPerActor = "p95_count_per_actor",
    P99CountPerActor = "p99_count_per_actor"
}

export class FilterEvent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "math" })
  math?: FilterEventMathEnum;

  @SpeakeasyMetadata({ elemType: Property })
  @Expose({ name: "properties" })
  @Type(() => Property)
  properties?: Property[];
}