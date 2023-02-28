import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DashboardsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class DashboardsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  dashboard?: shared.DashboardInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dashboard1?: shared.DashboardInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  dashboard2?: shared.DashboardInput;
}

export class DashboardsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardsCreatePathParams;

  @SpeakeasyMetadata()
  request?: DashboardsCreateRequests;
}

export class DashboardsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dashboard?: shared.DashboardOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}