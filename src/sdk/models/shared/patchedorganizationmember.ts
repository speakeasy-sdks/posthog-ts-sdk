import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PatchedOrganizationMemberInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=level, multipart_form, name=level" })
  @Expose({ name: "level" })
  level?: number;
}