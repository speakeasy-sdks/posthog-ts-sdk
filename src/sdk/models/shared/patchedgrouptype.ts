import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchedGroupTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name_plural, form, name=name_plural;, multipart_form, name=name_plural" })
  namePlural?: string;

  @SpeakeasyMetadata({ data: "json, name=name_singular, form, name=name_singular;, multipart_form, name=name_singular" })
  nameSingular?: string;
}