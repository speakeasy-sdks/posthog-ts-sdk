import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class OrganizationInviteCreatedBy extends SpeakeasyBase {
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

export class OrganizationInvite extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => OrganizationInviteCreatedBy)
  createdBy: OrganizationInviteCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "emailing_attempt_made" })
  emailingAttemptMade: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_expired" })
  isExpired: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "target_email" })
  targetEmail: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}

export class OrganizationInviteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=first_name, multipart_form, name=first_name" })
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "form, name=message, multipart_form, name=message" })
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata({ data: "form, name=target_email, multipart_form, name=target_email" })
  @Expose({ name: "target_email" })
  targetEmail: string;
}