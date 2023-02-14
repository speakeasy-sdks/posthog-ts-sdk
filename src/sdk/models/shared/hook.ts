import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class HookInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event, form, name=event;, multipart_form, name=event" })
  event: string;

  @SpeakeasyMetadata({ data: "json, name=id, form, name=id;, multipart_form, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_id, form, name=resource_id;, multipart_form, name=resource_id" })
  resourceId?: number;

  @SpeakeasyMetadata({ data: "json, name=target, form, name=target;, multipart_form, name=target" })
  target: string;
}

export class Hook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId?: number;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team: number;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated: Date;
}