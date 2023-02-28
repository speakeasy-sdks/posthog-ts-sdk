import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class ExperimentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=archived, multipart_form, name=archived" })
  @Expose({ name: "archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "form, name=description, multipart_form, name=description" })
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=end_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=end_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "form, name=feature_flag_key, multipart_form, name=feature_flag_key" })
  @Expose({ name: "feature_flag_key" })
  featureFlagKey: string;

  @SpeakeasyMetadata({ data: "form, name=filters;json=true, multipart_form, name=filters;json=true" })
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata({ data: "form, name=parameters;json=true, multipart_form, name=parameters;json=true" })
  @Expose({ name: "parameters" })
  parameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=secondary_metrics;json=true, multipart_form, name=secondary_metrics;json=true" })
  @Expose({ name: "secondary_metrics" })
  secondaryMetrics?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=start_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=start_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;
}

export class ExperimentCreatedBy extends SpeakeasyBase {
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

export class Experiment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "archived" })
  archived?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => ExperimentCreatedBy)
  createdBy: ExperimentCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "end_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "feature_flag" })
  featureFlag: number;

  @SpeakeasyMetadata()
  @Expose({ name: "feature_flag_key" })
  featureFlagKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameters" })
  parameters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "secondary_metrics" })
  secondaryMetrics?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}