import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class OrganizationMemberInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=level, multipart_form, name=level" })
  @Expose({ name: "level" })
  level?: number;
}

export class OrganizationMemberUser extends SpeakeasyBase {
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

export class OrganizationMember extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "joined_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  joinedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "level" })
  level?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => OrganizationMemberUser)
  user: OrganizationMemberUser;
}