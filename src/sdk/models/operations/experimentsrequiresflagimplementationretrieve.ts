import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ExperimentsRequiresFlagImplementationRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class ExperimentsRequiresFlagImplementationRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExperimentsRequiresFlagImplementationRetrievePathParams;
}

export class ExperimentsRequiresFlagImplementationRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  experiment?: shared.Experiment;

  @SpeakeasyMetadata()
  statusCode: number;
}