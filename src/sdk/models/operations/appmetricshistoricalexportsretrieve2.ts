import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class AppMetricsHistoricalExportsRetrieve2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_plugin_config_id" })
  parentLookupPluginConfigId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class AppMetricsHistoricalExportsRetrieve2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppMetricsHistoricalExportsRetrieve2PathParams;
}

export class AppMetricsHistoricalExportsRetrieve2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}