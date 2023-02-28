import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class DashboardTemplatesCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class DashboardTemplatesCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  dashboardTemplate?: shared.DashboardTemplate;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  dashboardTemplate1?: shared.DashboardTemplate;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  dashboardTemplate2?: shared.DashboardTemplate;
}

export class DashboardTemplatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardTemplatesCreatePathParams;

  @SpeakeasyMetadata()
  request: DashboardTemplatesCreateRequests;
}

export class DashboardTemplatesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}