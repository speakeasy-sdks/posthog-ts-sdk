import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class FeatureFlagsActivityRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class FeatureFlagsActivityRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FeatureFlagsActivityRetrievePathParams;
}

export class FeatureFlagsActivityRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  featureFlag?: shared.FeatureFlag;

  @SpeakeasyMetadata()
  statusCode: number;
}