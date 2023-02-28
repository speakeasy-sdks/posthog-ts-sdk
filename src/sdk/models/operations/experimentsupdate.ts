import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ExperimentsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class ExperimentsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  experiment?: shared.ExperimentInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  experiment1?: shared.ExperimentInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  experiment2?: shared.ExperimentInput;
}

export class ExperimentsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExperimentsUpdatePathParams;

  @SpeakeasyMetadata()
  request: ExperimentsUpdateRequests;
}

export class ExperimentsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  experiment?: shared.Experiment;

  @SpeakeasyMetadata()
  statusCode: number;
}