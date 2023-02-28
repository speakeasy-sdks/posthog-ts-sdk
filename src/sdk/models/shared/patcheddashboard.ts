import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// PatchedDashboardInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class PatchedDashboardInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=delete_insights, multipart_form, name=delete_insights" })
  @Expose({ name: "delete_insights" })
  deleteInsights?: boolean;

  @SpeakeasyMetadata({ data: "form, name=deleted, multipart_form, name=deleted" })
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "form, name=description, multipart_form, name=description" })
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=filters;json=true, multipart_form, name=filters;json=true" })
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=pinned, multipart_form, name=pinned" })
  @Expose({ name: "pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "form, name=restriction_level, multipart_form, name=restriction_level" })
  @Expose({ name: "restriction_level" })
  restrictionLevel?: number;

  @SpeakeasyMetadata({ data: "form, name=tags, multipart_form, name=tags" })
  @Expose({ name: "tags" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "form, name=use_dashboard, multipart_form, name=use_dashboard" })
  @Expose({ name: "use_dashboard" })
  useDashboard?: number;

  @SpeakeasyMetadata({ data: "form, name=use_template, multipart_form, name=use_template" })
  @Expose({ name: "use_template" })
  useTemplate?: string;
}