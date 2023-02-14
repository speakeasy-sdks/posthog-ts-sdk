import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CohortsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class CohortsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  cohort?: shared.CohortInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  cohort1?: shared.CohortInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  cohort2?: shared.CohortInput;
}

export class CohortsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CohortsCreatePathParams;

  @SpeakeasyMetadata()
  request?: CohortsCreateRequests;
}

export class CohortsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cohort?: shared.Cohort;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}