import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// PatchedFeatureFlagInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class PatchedFeatureFlagInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active, multipart_form, name=active" })
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "form, name=created_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=created_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "form, name=deleted, multipart_form, name=deleted" })
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "form, name=ensure_experience_continuity, multipart_form, name=ensure_experience_continuity" })
  @Expose({ name: "ensure_experience_continuity" })
  ensureExperienceContinuity?: boolean;

  @SpeakeasyMetadata({ data: "form, name=filters;json=true, multipart_form, name=filters;json=true" })
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=key, multipart_form, name=key" })
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=performed_rollback, multipart_form, name=performed_rollback" })
  @Expose({ name: "performed_rollback" })
  performedRollback?: boolean;

  @SpeakeasyMetadata({ data: "form, name=rollback_conditions;json=true, multipart_form, name=rollback_conditions;json=true" })
  @Expose({ name: "rollback_conditions" })
  rollbackConditions?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=tags, multipart_form, name=tags" })
  @Expose({ name: "tags" })
  tags?: any[];
}