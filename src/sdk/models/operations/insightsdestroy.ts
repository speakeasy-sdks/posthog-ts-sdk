import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class InsightsDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum InsightsDestroyFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class InsightsDestroyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: InsightsDestroyFormatEnum;
}

export class InsightsDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsightsDestroyPathParams;

  @SpeakeasyMetadata()
  queryParams: InsightsDestroyQueryParams;
}

export class InsightsDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}