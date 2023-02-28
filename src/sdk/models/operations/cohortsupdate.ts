import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class CohortsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class CohortsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  cohort?: shared.CohortInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  cohort1?: shared.CohortInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  cohort2?: shared.CohortInput;
}

export class CohortsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CohortsUpdatePathParams;

  @SpeakeasyMetadata()
  request?: CohortsUpdateRequests;
}

export class CohortsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cohort?: shared.Cohort;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}