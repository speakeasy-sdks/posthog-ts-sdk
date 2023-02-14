import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchedCohortInput extends SpeakeasyBase {
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