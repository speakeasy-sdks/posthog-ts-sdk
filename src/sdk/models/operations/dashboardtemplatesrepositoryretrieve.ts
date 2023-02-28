import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class DashboardTemplatesRepositoryRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class DashboardTemplatesRepositoryRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardTemplatesRepositoryRetrievePathParams;
}

export class DashboardTemplatesRepositoryRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}