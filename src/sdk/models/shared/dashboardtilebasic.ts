import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class DashboardTileBasic extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dashboard_id" })
  dashboardId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;
}