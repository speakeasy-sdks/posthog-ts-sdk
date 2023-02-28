import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class RoleMembershipUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "distinct_id" })
  distinctId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;
}

export class RoleMembershipOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "joined_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  joinedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "role_id" })
  roleId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => RoleMembershipUser)
  user: RoleMembershipUser;
}

export class RoleMembershipInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=user_uuid, multipart_form, name=user_uuid" })
  @Expose({ name: "user_uuid" })
  userUuid: string;
}