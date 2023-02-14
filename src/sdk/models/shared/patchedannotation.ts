import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

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
  @SpeakeasyMetadata({ data: "json, name=content, form, name=content;, multipart_form, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=creation_type, form, name=creation_type;, multipart_form, name=creation_type" })
  creationType?: PatchedAnnotationCreationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dashboard_item, form, name=dashboard_item;, multipart_form, name=dashboard_item" })
  dashboardItem?: number;

  @SpeakeasyMetadata({ data: "json, name=date_marker, form, name=date_marker;, multipart_form, name=date_marker" })
  dateMarker?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted, form, name=deleted;, multipart_form, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scope, form, name=scope;, multipart_form, name=scope" })
  scope?: PatchedAnnotationScopeEnum;
}