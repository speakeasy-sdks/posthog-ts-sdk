import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchedExperimentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived, form, name=archived;, multipart_form, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description, form, name=description;, multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date, form, name=end_date;, multipart_form, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=feature_flag_key, form, name=feature_flag_key;, multipart_form, name=feature_flag_key" })
  featureFlagKey?: string;

  @SpeakeasyMetadata({ data: "json, name=filters, form, name=filters;json=true, multipart_form, name=filters;json=true" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters, form, name=parameters;json=true, multipart_form, name=parameters;json=true" })
  parameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=secondary_metrics, form, name=secondary_metrics;json=true, multipart_form, name=secondary_metrics;json=true" })
  secondaryMetrics?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=start_date, form, name=start_date;, multipart_form, name=start_date" })
  startDate?: Date;
}