import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum PatchedOrganizationResourceAccessResourceEnum {
    FeatureFlags = "feature flags",
    Experiments = "experiments",
    Cohorts = "cohorts",
    DataManagement = "data management",
    SessionRecordings = "session recordings",
    Insights = "insights",
    Dashboards = "dashboards"
}

export class PatchedOrganizationResourceAccessInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_level, form, name=access_level;, multipart_form, name=access_level" })
  accessLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=resource, form, name=resource;, multipart_form, name=resource" })
  resource?: PatchedOrganizationResourceAccessResourceEnum;
}