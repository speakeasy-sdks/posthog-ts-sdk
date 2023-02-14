import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class FeatureFlagRoleAccessFeatureFlagCreatedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distinct_id" })
  distinctId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}

// FeatureFlagRoleAccessFeatureFlag
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class FeatureFlagRoleAccessFeatureFlag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=can_edit" })
  canEdit: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: FeatureFlagRoleAccessFeatureFlagCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ensure_experience_continuity" })
  ensureExperienceContinuity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=experiment_set" })
  experimentSet: number[];

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=is_simple_flag" })
  isSimpleFlag: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=performed_rollback" })
  performedRollback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rollback_conditions" })
  rollbackConditions?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=rollout_percentage" })
  rolloutPercentage: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: any[];
}

export class FeatureFlagRoleAccessRoleCreatedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distinct_id" })
  distinctId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}

export class FeatureFlagRoleAccessRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associated_flags" })
  associatedFlags: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: FeatureFlagRoleAccessRoleCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=feature_flags_access_level" })
  featureFlagsAccessLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

export class FeatureFlagRoleAccessOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_at" })
  addedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=feature_flag" })
  featureFlag: FeatureFlagRoleAccessFeatureFlag;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: FeatureFlagRoleAccessRole;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}

export class FeatureFlagRoleAccessInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=role_id, form, name=role_id;, multipart_form, name=role_id" })
  roleId: string;
}