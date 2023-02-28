import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum PatchedAnnotationCreationTypeEnum {
    Usr = "USR",
    Git = "GIT"
}
export enum PatchedAnnotationScopeEnum {
    DashboardItem = "dashboard_item",
    Project = "project",
    Organization = "organization"
}

export class PatchedAnnotationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=content, multipart_form, name=content" })
  @Expose({ name: "content" })
  content?: string;

  @SpeakeasyMetadata({ data: "form, name=creation_type, multipart_form, name=creation_type" })
  @Expose({ name: "creation_type" })
  creationType?: PatchedAnnotationCreationTypeEnum;

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
  scope?: PatchedAnnotationScopeEnum;
}