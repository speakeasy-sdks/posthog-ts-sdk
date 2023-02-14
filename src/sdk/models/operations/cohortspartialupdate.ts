import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CohortsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class CohortsPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedCohort?: shared.PatchedCohortInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedCohort1?: shared.PatchedCohortInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedCohort2?: shared.PatchedCohortInput;
}

export class CohortsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CohortsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: CohortsPartialUpdateRequests;
}

export class CohortsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cohort?: shared.Cohort;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}