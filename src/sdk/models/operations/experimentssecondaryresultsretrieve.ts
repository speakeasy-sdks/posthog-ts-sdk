import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ExperimentsSecondaryResultsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class ExperimentsSecondaryResultsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExperimentsSecondaryResultsRetrievePathParams;
}

export class ExperimentsSecondaryResultsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  experiment?: shared.Experiment;

  @SpeakeasyMetadata()
  statusCode: number;
}