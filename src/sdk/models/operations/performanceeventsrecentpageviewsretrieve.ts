import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PerformanceEventsRecentPageviewsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class PerformanceEventsRecentPageviewsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PerformanceEventsRecentPageviewsRetrievePathParams;
}

export class PerformanceEventsRecentPageviewsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  performanceEvent?: shared.PerformanceEvent;

  @SpeakeasyMetadata()
  statusCode: number;
}