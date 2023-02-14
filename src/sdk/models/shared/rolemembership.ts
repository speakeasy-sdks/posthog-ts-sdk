import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class RoleMembershipUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distinct_id" })
  distinctId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}

export class RoleMembershipOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=joined_at" })
  joinedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=role_id" })
  roleId: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: RoleMembershipUser;
}

export class RoleMembershipInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user_uuid, form, name=user_uuid;, multipart_form, name=user_uuid" })
  userUuid: string;
}