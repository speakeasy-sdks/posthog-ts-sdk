import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum OrganizationResourceAccessResourceEnum {
    FeatureFlags = "feature flags",
    Experiments = "experiments",
    Cohorts = "cohorts",
    DataManagement = "data management",
    SessionRecordings = "session recordings",
    Insights = "insights",
    Dashboards = "dashboards"
}

export class OrganizationResourceAccessInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=access_level, multipart_form, name=access_level" })
  @Expose({ name: "access_level" })
  accessLevel?: number;

  @SpeakeasyMetadata({ data: "form, name=resource, multipart_form, name=resource" })
  @Expose({ name: "resource" })
  resource: OrganizationResourceAccessResourceEnum;
}

export class OrganizationResourceAccess extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "access_level" })
  accessLevel?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  createdBy: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  organization: string;

  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  resource: OrganizationResourceAccessResourceEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}