import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PatchedPersonInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=properties;json=true, multipart_form, name=properties;json=true" })
  @Expose({ name: "properties" })
  properties?: Record<string, any>;
}