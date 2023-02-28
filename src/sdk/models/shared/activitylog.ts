import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserBasic, UserBasicInput } from "./userbasic";
import { Expose, Transform, Type } from "class-transformer";


export class ActivityLog extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "activity" })
  activity: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "detail" })
  detail?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_system" })
  isSystem?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "item_id" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  scope: string;

  @SpeakeasyMetadata()
  @Expose({ name: "unread" })
  unread: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => UserBasic)
  user: UserBasic;
}

export class ActivityLogInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=activity, multipart_form, name=activity" })
  @Expose({ name: "activity" })
  activity: string;

  @SpeakeasyMetadata({ data: "form, name=created_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=created_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "form, name=detail;json=true, multipart_form, name=detail;json=true" })
  @Expose({ name: "detail" })
  detail?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=is_system, multipart_form, name=is_system" })
  @Expose({ name: "is_system" })
  isSystem?: boolean;

  @SpeakeasyMetadata({ data: "form, name=item_id, multipart_form, name=item_id" })
  @Expose({ name: "item_id" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "form, name=organization_id, multipart_form, name=organization_id" })
  @Expose({ name: "organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "form, name=scope, multipart_form, name=scope" })
  @Expose({ name: "scope" })
  scope: string;

  @SpeakeasyMetadata({ data: "form, name=user;json=true, multipart_form, name=user;json=true" })
  @Expose({ name: "user" })
  @Type(() => UserBasicInput)
  user: UserBasicInput;
}