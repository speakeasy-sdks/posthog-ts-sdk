import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class HookInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=event, multipart_form, name=event" })
  @Expose({ name: "event" })
  event: string;

  @SpeakeasyMetadata({ data: "form, name=id, multipart_form, name=id" })
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ data: "form, name=resource_id, multipart_form, name=resource_id" })
  @Expose({ name: "resource_id" })
  resourceId?: number;

  @SpeakeasyMetadata({ data: "form, name=target, multipart_form, name=target" })
  @Expose({ name: "target" })
  target: string;
}

export class Hook extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "event" })
  event: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "resource_id" })
  resourceId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "target" })
  target: string;

  @SpeakeasyMetadata()
  @Expose({ name: "team" })
  team: number;

  @SpeakeasyMetadata()
  @Expose({ name: "updated" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updated: Date;
}