import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


// DashboardInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class DashboardInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=delete_insights, multipart_form, name=delete_insights" })
  @Expose({ name: "delete_insights" })
  deleteInsights?: boolean;

  @SpeakeasyMetadata({ data: "form, name=deleted, multipart_form, name=deleted" })
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "form, name=description, multipart_form, name=description" })
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=filters;json=true, multipart_form, name=filters;json=true" })
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=pinned, multipart_form, name=pinned" })
  @Expose({ name: "pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "form, name=restriction_level, multipart_form, name=restriction_level" })
  @Expose({ name: "restriction_level" })
  restrictionLevel?: number;

  @SpeakeasyMetadata({ data: "form, name=tags, multipart_form, name=tags" })
  @Expose({ name: "tags" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "form, name=use_dashboard, multipart_form, name=use_dashboard" })
  @Expose({ name: "use_dashboard" })
  useDashboard?: number;

  @SpeakeasyMetadata({ data: "form, name=use_template, multipart_form, name=use_template" })
  @Expose({ name: "use_template" })
  useTemplate?: string;
}

export class DashboardCreatedBy extends SpeakeasyBase {
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
export enum DashboardCreationModeEnum {
    Default = "default",
    Template = "template",
    Duplicate = "duplicate"
}

// DashboardOutput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class DashboardOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => DashboardCreatedBy)
  createdBy: DashboardCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "creation_mode" })
  creationMode: DashboardCreationModeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "effective_privilege_level" })
  effectivePrivilegeLevel: number;

  @SpeakeasyMetadata()
  @Expose({ name: "effective_restriction_level" })
  effectiveRestrictionLevel: number;

  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "is_shared" })
  isShared: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "restriction_level" })
  restrictionLevel?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tags" })
  tags?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "tiles" })
  tiles: string;
}