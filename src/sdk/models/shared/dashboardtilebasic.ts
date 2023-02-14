import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DashboardTileBasic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dashboard_id" })
  dashboardId: number;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}