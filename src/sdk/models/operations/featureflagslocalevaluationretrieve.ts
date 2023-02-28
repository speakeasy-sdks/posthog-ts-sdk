import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class FeatureFlagsLocalEvaluationRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class FeatureFlagsLocalEvaluationRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FeatureFlagsLocalEvaluationRetrievePathParams;
}

export class FeatureFlagsLocalEvaluationRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  featureFlag?: shared.FeatureFlag;

  @SpeakeasyMetadata()
  statusCode: number;
}