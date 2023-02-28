import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class CohortInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=deleted, multipart_form, name=deleted" })
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "form, name=description, multipart_form, name=description" })
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=filters;json=true, multipart_form, name=filters;json=true" })
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=groups;json=true, multipart_form, name=groups;json=true" })
  @Expose({ name: "groups" })
  groups?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=is_static, multipart_form, name=is_static" })
  @Expose({ name: "is_static" })
  isStatic?: boolean;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name?: string;
}

export class CohortCreatedBy extends SpeakeasyBase {
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

export class Cohort extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count: number;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => CohortCreatedBy)
  createdBy: CohortCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errors_calculating" })
  errorsCalculating: number;

  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "groups" })
  groups?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "is_calculating" })
  isCalculating: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "is_static" })
  isStatic?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "last_calculation" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastCalculation: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}