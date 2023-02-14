import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CohortsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class CohortsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CohortsRetrievePathParams;
}

export class CohortsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cohort?: shared.Cohort;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}