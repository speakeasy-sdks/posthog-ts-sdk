import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class OrganizationMemberInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level, form, name=level;, multipart_form, name=level" })
  level?: number;
}

export class OrganizationMemberUser extends SpeakeasyBase {
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

export class OrganizationMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=joined_at" })
  joinedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: OrganizationMemberUser;
}