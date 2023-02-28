import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class FeatureFlagRoleAccessFeatureFlagCreatedBy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "distinct_id" })
  distinctId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;
}

// FeatureFlagRoleAccessFeatureFlag
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class FeatureFlagRoleAccessFeatureFlag extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "can_edit" })
  canEdit: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => FeatureFlagRoleAccessFeatureFlagCreatedBy)
  createdBy: FeatureFlagRoleAccessFeatureFlagCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "ensure_experience_continuity" })
  ensureExperienceContinuity?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "experiment_set" })
  experimentSet: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "is_simple_flag" })
  isSimpleFlag: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "performed_rollback" })
  performedRollback?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "rollback_conditions" })
  rollbackConditions?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "rollout_percentage" })
  rolloutPercentage: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tags" })
  tags?: any[];
}

export class FeatureFlagRoleAccessRoleCreatedBy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "distinct_id" })
  distinctId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;
}

export class FeatureFlagRoleAccessRole extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "associated_flags" })
  associatedFlags: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => FeatureFlagRoleAccessRoleCreatedBy)
  createdBy: FeatureFlagRoleAccessRoleCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "feature_flags_access_level" })
  featureFlagsAccessLevel?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "members" })
  members: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class FeatureFlagRoleAccessOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "added_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  addedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "feature_flag" })
  @Type(() => FeatureFlagRoleAccessFeatureFlag)
  featureFlag: FeatureFlagRoleAccessFeatureFlag;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  @Type(() => FeatureFlagRoleAccessRole)
  role: FeatureFlagRoleAccessRole;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}

export class FeatureFlagRoleAccessInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=role_id, multipart_form, name=role_id" })
  @Expose({ name: "role_id" })
  roleId: string;
}