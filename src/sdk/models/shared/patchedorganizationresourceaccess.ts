import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

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
  @SpeakeasyMetadata({ data: "form, name=access_level, multipart_form, name=access_level" })
  @Expose({ name: "access_level" })
  accessLevel?: number;

  @SpeakeasyMetadata({ data: "form, name=resource, multipart_form, name=resource" })
  @Expose({ name: "resource" })
  resource?: PatchedOrganizationResourceAccessResourceEnum;
}