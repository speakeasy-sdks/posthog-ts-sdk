import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class FeatureFlagsRoleAccessCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_feature_flag_id" })
  parentLookupFeatureFlagId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class FeatureFlagsRoleAccessCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  featureFlagRoleAccess?: shared.FeatureFlagRoleAccessInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  featureFlagRoleAccess1?: shared.FeatureFlagRoleAccessInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  featureFlagRoleAccess2?: shared.FeatureFlagRoleAccessInput;
}

export class FeatureFlagsRoleAccessCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FeatureFlagsRoleAccessCreatePathParams;

  @SpeakeasyMetadata()
  request: FeatureFlagsRoleAccessCreateRequests;
}

export class FeatureFlagsRoleAccessCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  featureFlagRoleAccess?: shared.FeatureFlagRoleAccessOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}