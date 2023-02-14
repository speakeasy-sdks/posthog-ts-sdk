import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CohortInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted, form, name=deleted;, multipart_form, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description, form, name=description;, multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=filters, form, name=filters;json=true, multipart_form, name=filters;json=true" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=groups, form, name=groups;json=true, multipart_form, name=groups;json=true" })
  groups?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=is_static, form, name=is_static;, multipart_form, name=is_static" })
  isStatic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;
}

export class CohortCreatedBy extends SpeakeasyBase {
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

export class Cohort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: CohortCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=errors_calculating" })
  errorsCalculating: number;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=is_calculating" })
  isCalculating: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_static" })
  isStatic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_calculation" })
  lastCalculation: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}