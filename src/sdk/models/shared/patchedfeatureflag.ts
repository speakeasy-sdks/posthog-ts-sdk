import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// PatchedFeatureFlagInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class PatchedFeatureFlagInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active, form, name=active;, multipart_form, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at, form, name=created_at;, multipart_form, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted, form, name=deleted;, multipart_form, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ensure_experience_continuity, form, name=ensure_experience_continuity;, multipart_form, name=ensure_experience_continuity" })
  ensureExperienceContinuity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filters, form, name=filters;json=true, multipart_form, name=filters;json=true" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=key, form, name=key;, multipart_form, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=performed_rollback, form, name=performed_rollback;, multipart_form, name=performed_rollback" })
  performedRollback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rollback_conditions, form, name=rollback_conditions;json=true, multipart_form, name=rollback_conditions;json=true" })
  rollbackConditions?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=tags, form, name=tags;, multipart_form, name=tags" })
  tags?: any[];
}