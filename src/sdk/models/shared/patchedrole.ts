import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchedRoleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feature_flags_access_level, form, name=feature_flags_access_level;, multipart_form, name=feature_flags_access_level" })
  featureFlagsAccessLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;
}