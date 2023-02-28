import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum PatchedSubscriptionByweekdayEnum {
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
    Sunday = "sunday"
}
export enum PatchedSubscriptionFrequencyEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Yearly = "yearly"
}
export enum PatchedSubscriptionTargetTypeEnum {
    Email = "email",
    Slack = "slack",
    Webhook = "webhook"
}

// PatchedSubscriptionInput
/** 
 * Standard Subscription serializer.
**/
export class PatchedSubscriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=bysetpos, multipart_form, name=bysetpos" })
  @Expose({ name: "bysetpos" })
  bysetpos?: number;

  @SpeakeasyMetadata({ data: "form, name=byweekday, multipart_form, name=byweekday" })
  @Expose({ name: "byweekday" })
  byweekday?: PatchedSubscriptionByweekdayEnum[];

  @SpeakeasyMetadata({ data: "form, name=count, multipart_form, name=count" })
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata({ data: "form, name=dashboard, multipart_form, name=dashboard" })
  @Expose({ name: "dashboard" })
  dashboard?: number;

  @SpeakeasyMetadata({ data: "form, name=deleted, multipart_form, name=deleted" })
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "form, name=frequency, multipart_form, name=frequency" })
  @Expose({ name: "frequency" })
  frequency?: PatchedSubscriptionFrequencyEnum;

  @SpeakeasyMetadata({ data: "form, name=insight, multipart_form, name=insight" })
  @Expose({ name: "insight" })
  insight?: number;

  @SpeakeasyMetadata({ data: "form, name=interval, multipart_form, name=interval" })
  @Expose({ name: "interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "form, name=invite_message, multipart_form, name=invite_message" })
  @Expose({ name: "invite_message" })
  inviteMessage?: string;

  @SpeakeasyMetadata({ data: "form, name=start_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=start_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "form, name=target_type, multipart_form, name=target_type" })
  @Expose({ name: "target_type" })
  targetType?: PatchedSubscriptionTargetTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=target_value, multipart_form, name=target_value" })
  @Expose({ name: "target_value" })
  targetValue?: string;

  @SpeakeasyMetadata({ data: "form, name=title, multipart_form, name=title" })
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata({ data: "form, name=until_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=until_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "until_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  untilDate?: Date;
}