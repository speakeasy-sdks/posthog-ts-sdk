import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class FunnelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum FunnelsFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class FunnelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: FunnelsFormatEnum;
}

export class FunnelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FunnelsPathParams;

  @SpeakeasyMetadata()
  queryParams: FunnelsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Funnel;
}

export class FunnelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  funnelStepsResults?: shared.FunnelStepsResults;

  @SpeakeasyMetadata()
  statusCode: number;
}