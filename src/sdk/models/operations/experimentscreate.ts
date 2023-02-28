import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ExperimentsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class ExperimentsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  experiment?: shared.ExperimentInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  experiment1?: shared.ExperimentInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  experiment2?: shared.ExperimentInput;
}

export class ExperimentsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExperimentsCreatePathParams;

  @SpeakeasyMetadata()
  request: ExperimentsCreateRequests;
}

export class ExperimentsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  experiment?: shared.Experiment;

  @SpeakeasyMetadata()
  statusCode: number;
}