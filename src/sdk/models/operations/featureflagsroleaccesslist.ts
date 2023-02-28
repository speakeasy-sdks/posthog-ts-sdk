import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class FeatureFlagsRoleAccessListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_feature_flag_id" })
  parentLookupFeatureFlagId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class FeatureFlagsRoleAccessListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class FeatureFlagsRoleAccessListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FeatureFlagsRoleAccessListPathParams;

  @SpeakeasyMetadata()
  queryParams: FeatureFlagsRoleAccessListQueryParams;
}

export class FeatureFlagsRoleAccessListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedFeatureFlagRoleAccessList?: shared.PaginatedFeatureFlagRoleAccessList;

  @SpeakeasyMetadata()
  statusCode: number;
}