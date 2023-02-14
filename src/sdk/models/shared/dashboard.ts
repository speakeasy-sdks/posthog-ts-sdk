import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// DashboardInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class DashboardInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete_insights, form, name=delete_insights;, multipart_form, name=delete_insights" })
  deleteInsights?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleted, form, name=deleted;, multipart_form, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description, form, name=description;, multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=filters, form, name=filters;json=true, multipart_form, name=filters;json=true" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pinned, form, name=pinned;, multipart_form, name=pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restriction_level, form, name=restriction_level;, multipart_form, name=restriction_level" })
  restrictionLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=tags, form, name=tags;json=true, multipart_form, name=tags;json=true" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "json, name=use_dashboard, form, name=use_dashboard;, multipart_form, name=use_dashboard" })
  useDashboard?: number;

  @SpeakeasyMetadata({ data: "json, name=use_template, form, name=use_template;, multipart_form, name=use_template" })
  useTemplate?: string;
}

export class DashboardCreatedBy extends SpeakeasyBase {
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
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: DashboardCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=creation_mode" })
  creationMode: DashboardCreationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=effective_privilege_level" })
  effectivePrivilegeLevel: number;

  @SpeakeasyMetadata({ data: "json, name=effective_restriction_level" })
  effectiveRestrictionLevel: number;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=is_shared" })
  isShared: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restriction_level" })
  restrictionLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "json, name=tiles" })
  tiles: string;
}