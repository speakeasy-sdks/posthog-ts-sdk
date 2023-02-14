import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

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
  @SpeakeasyMetadata({ data: "json, name=access_level, form, name=access_level;, multipart_form, name=access_level" })
  accessLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=resource, form, name=resource;, multipart_form, name=resource" })
  resource: OrganizationResourceAccessResourceEnum;
}

export class OrganizationResourceAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_level" })
  accessLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: OrganizationResourceAccessResourceEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}