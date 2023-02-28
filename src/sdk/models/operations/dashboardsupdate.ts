import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DashboardsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class DashboardsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  dashboard?: shared.DashboardInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dashboard1?: shared.DashboardInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  dashboard2?: shared.DashboardInput;
}

export class DashboardsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardsUpdatePathParams;

  @SpeakeasyMetadata()
  request?: DashboardsUpdateRequests;
}

export class DashboardsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dashboard?: shared.DashboardOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}