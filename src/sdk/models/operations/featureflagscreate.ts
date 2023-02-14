import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class FeatureFlagsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class FeatureFlagsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  featureFlag?: shared.FeatureFlagInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  featureFlag1?: shared.FeatureFlagInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  featureFlag2?: shared.FeatureFlagInput;
}

export class FeatureFlagsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FeatureFlagsCreatePathParams;

  @SpeakeasyMetadata()
  request: FeatureFlagsCreateRequests;
}

export class FeatureFlagsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  featureFlag?: shared.FeatureFlag;

  @SpeakeasyMetadata()
  statusCode: number;
}