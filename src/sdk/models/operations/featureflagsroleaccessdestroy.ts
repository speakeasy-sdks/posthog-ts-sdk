import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class FeatureFlagsRoleAccessDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_feature_flag_id" })
  parentLookupFeatureFlagId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class FeatureFlagsRoleAccessDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FeatureFlagsRoleAccessDestroyPathParams;
}

export class FeatureFlagsRoleAccessDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}