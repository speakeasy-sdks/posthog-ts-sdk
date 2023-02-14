import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class OrganizationInviteCreatedBy extends SpeakeasyBase {
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

export class OrganizationInvite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: OrganizationInviteCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=emailing_attempt_made" })
  emailingAttemptMade: boolean;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=is_expired" })
  isExpired: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=target_email" })
  targetEmail: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}

export class OrganizationInviteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_name, form, name=first_name;, multipart_form, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=message, form, name=message;, multipart_form, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=target_email, form, name=target_email;, multipart_form, name=target_email" })
  targetEmail: string;
}