import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

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
  @SpeakeasyMetadata({ data: "form, name=content, multipart_form, name=content" })
  @Expose({ name: "content" })
  content?: string;

  @SpeakeasyMetadata({ data: "form, name=creation_type, multipart_form, name=creation_type" })
  @Expose({ name: "creation_type" })
  creationType?: AnnotationCreationTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=dashboard_item, multipart_form, name=dashboard_item" })
  @Expose({ name: "dashboard_item" })
  dashboardItem?: number;

  @SpeakeasyMetadata({ data: "form, name=date_marker;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=date_marker;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "date_marker" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateMarker?: Date;

  @SpeakeasyMetadata({ data: "form, name=deleted, multipart_form, name=deleted" })
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "form, name=scope, multipart_form, name=scope" })
  @Expose({ name: "scope" })
  scope?: AnnotationScopeEnum;
}

export class AnnotationCreatedBy extends SpeakeasyBase {
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

export class Annotation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => AnnotationCreatedBy)
  createdBy: AnnotationCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "creation_type" })
  creationType?: AnnotationCreationTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "dashboard_item" })
  dashboardItem?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "date_marker" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dateMarker?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "insight_name" })
  insightName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "insight_short_id" })
  insightShortId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  scope?: AnnotationScopeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}