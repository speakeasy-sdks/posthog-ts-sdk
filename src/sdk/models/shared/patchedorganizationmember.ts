import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchedOrganizationMemberInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level, form, name=level;, multipart_form, name=level" })
  level?: number;
}