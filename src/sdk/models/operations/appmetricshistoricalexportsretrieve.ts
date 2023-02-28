import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class AppMetricsHistoricalExportsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_plugin_config_id" })
  parentLookupPluginConfigId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class AppMetricsHistoricalExportsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppMetricsHistoricalExportsRetrievePathParams;
}

export class AppMetricsHistoricalExportsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}