import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class FeatureFlagsEvaluationReasonsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class FeatureFlagsEvaluationReasonsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FeatureFlagsEvaluationReasonsRetrievePathParams;
}

export class FeatureFlagsEvaluationReasonsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  featureFlag?: shared.FeatureFlag;

  @SpeakeasyMetadata()
  statusCode: number;
}