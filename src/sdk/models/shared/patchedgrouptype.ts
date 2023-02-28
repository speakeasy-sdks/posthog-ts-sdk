import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PatchedGroupTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=name_plural, multipart_form, name=name_plural" })
  @Expose({ name: "name_plural" })
  namePlural?: string;

  @SpeakeasyMetadata({ data: "form, name=name_singular, multipart_form, name=name_singular" })
  @Expose({ name: "name_singular" })
  nameSingular?: string;
}