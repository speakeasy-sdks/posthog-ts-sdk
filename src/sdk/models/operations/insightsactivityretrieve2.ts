import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class InsightsActivityRetrieve2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsActivityRetrieve2FormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsActivityRetrieve2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsActivityRetrieve2FormatEnum;
}

export class InsightsActivityRetrieve2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsActivityRetrieve2PathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsActivityRetrieve2QueryParams;
}

export class InsightsActivityRetrieve2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insight?: shared.Insight;

  @SpeakeasyMetadata()
  statusCode: number;
}