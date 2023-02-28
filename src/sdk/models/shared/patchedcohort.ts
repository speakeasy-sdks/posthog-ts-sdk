import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PatchedCohortInput extends SpeakeasyBase {
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