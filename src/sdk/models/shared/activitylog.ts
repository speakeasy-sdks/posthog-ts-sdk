import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserBasic, UserBasicInput } from "./userbasic";


export class ActivityLog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity" })
  activity: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=is_system" })
  isSystem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=item_id" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: string;

  @SpeakeasyMetadata({ data: "json, name=unread" })
  unread: boolean;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: UserBasic;
}

export class ActivityLogInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity, form, name=activity;, multipart_form, name=activity" })
  activity: string;

  @SpeakeasyMetadata({ data: "json, name=created_at, form, name=created_at;, multipart_form, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=detail, form, name=detail;json=true, multipart_form, name=detail;json=true" })
  detail?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=is_system, form, name=is_system;, multipart_form, name=is_system" })
  isSystem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=item_id, form, name=item_id;, multipart_form, name=item_id" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id, form, name=organization_id;, multipart_form, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=scope, form, name=scope;, multipart_form, name=scope" })
  scope: string;

  @SpeakeasyMetadata({ data: "json, name=user, form, name=user;json=true, multipart_form, name=user;json=true" })
  user: UserBasicInput;
}