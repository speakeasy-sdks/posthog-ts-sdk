import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PatchedHookInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=event, multipart_form, name=event" })
  @Expose({ name: "event" })
  event?: string;

  @SpeakeasyMetadata({ data: "form, name=id, multipart_form, name=id" })
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ data: "form, name=resource_id, multipart_form, name=resource_id" })
  @Expose({ name: "resource_id" })
  resourceId?: number;

  @SpeakeasyMetadata({ data: "form, name=target, multipart_form, name=target" })
  @Expose({ name: "target" })
  target?: string;
}