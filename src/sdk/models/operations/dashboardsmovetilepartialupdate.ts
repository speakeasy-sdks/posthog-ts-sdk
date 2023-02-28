import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DashboardsMoveTilePartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class DashboardsMoveTilePartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedDashboard?: shared.PatchedDashboardInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedDashboard1?: shared.PatchedDashboardInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedDashboard2?: shared.PatchedDashboardInput;
}

export class DashboardsMoveTilePartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardsMoveTilePartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: DashboardsMoveTilePartialUpdateRequests;
}

export class DashboardsMoveTilePartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dashboard?: shared.DashboardOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}