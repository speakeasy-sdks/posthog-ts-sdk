import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DashboardOutput } from "./dashboard";
import { Expose, Type } from "class-transformer";


export class PaginatedDashboardList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: DashboardOutput })
  @Expose({ name: "results" })
  @Type(() => DashboardOutput)
  results?: DashboardOutput[];
}