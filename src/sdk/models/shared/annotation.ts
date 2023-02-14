import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum AnnotationCreationTypeEnum {
    Usr = "USR",
    Git = "GIT"
}
export enum AnnotationScopeEnum {
    DashboardItem = "dashboard_item",
    Project = "project",
    Organization = "organization"
}

export class AnnotationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content, form, name=content;, multipart_form, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=creation_type, form, name=creation_type;, multipart_form, name=creation_type" })
  creationType?: AnnotationCreationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dashboard_item, form, name=dashboard_item;, multipart_form, name=dashboard_item" })
  dashboardItem?: number;

  @SpeakeasyMetadata({ data: "json, name=date_marker, form, name=date_marker;, multipart_form, name=date_marker" })
  dateMarker?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted, form, name=deleted;, multipart_form, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scope, form, name=scope;, multipart_form, name=scope" })
  scope?: AnnotationScopeEnum;
}

export class AnnotationCreatedBy extends SpeakeasyBase {
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

export class Annotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: AnnotationCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=creation_type" })
  creationType?: AnnotationCreationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dashboard_item" })
  dashboardItem?: number;

  @SpeakeasyMetadata({ data: "json, name=date_marker" })
  dateMarker?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=insight_name" })
  insightName: string;

  @SpeakeasyMetadata({ data: "json, name=insight_short_id" })
  insightShortId: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: AnnotationScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}