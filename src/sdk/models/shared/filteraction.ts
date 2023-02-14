import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Property } from "./property";

export enum FilterActionMathEnum {
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

export class FilterAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=math" })
  math?: FilterActionMathEnum;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: Property })
  properties?: Property[];
}