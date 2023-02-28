import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PatchedRoleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=feature_flags_access_level, multipart_form, name=feature_flags_access_level" })
  @Expose({ name: "feature_flags_access_level" })
  featureFlagsAccessLevel?: number;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name?: string;
}