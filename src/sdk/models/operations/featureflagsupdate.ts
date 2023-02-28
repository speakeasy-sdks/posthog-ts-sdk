import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class FeatureFlagsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class FeatureFlagsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  featureFlag?: shared.FeatureFlagInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  featureFlag1?: shared.FeatureFlagInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  featureFlag2?: shared.FeatureFlagInput;
}

export class FeatureFlagsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FeatureFlagsUpdatePathParams;

  @SpeakeasyMetadata()
  request: FeatureFlagsUpdateRequests;
}

export class FeatureFlagsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  featureFlag?: shared.FeatureFlag;

  @SpeakeasyMetadata()
  statusCode: number;
}