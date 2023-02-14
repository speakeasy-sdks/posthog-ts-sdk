import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchedPersonInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties, form, name=properties;json=true, multipart_form, name=properties;json=true" })
  properties?: Record<string, any>;
}