import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export enum SubscriptionByweekdayEnum {
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
    Sunday = "sunday"
}
export enum SubscriptionFrequencyEnum {
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Yearly = "yearly"
}
export enum SubscriptionTargetTypeEnum {
    Email = "email",
    Slack = "slack",
    Webhook = "webhook"
}

// SubscriptionInput
/** 
 * Standard Subscription serializer.
**/
export class SubscriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=bysetpos, multipart_form, name=bysetpos" })
  @Expose({ name: "bysetpos" })
  bysetpos?: number;

  @SpeakeasyMetadata({ data: "form, name=byweekday, multipart_form, name=byweekday" })
  @Expose({ name: "byweekday" })
  byweekday?: SubscriptionByweekdayEnum[];

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
  frequency: SubscriptionFrequencyEnum;

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
  startDate: Date;

  @SpeakeasyMetadata({ data: "form, name=target_type, multipart_form, name=target_type" })
  @Expose({ name: "target_type" })
  targetType: SubscriptionTargetTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=target_value, multipart_form, name=target_value" })
  @Expose({ name: "target_value" })
  targetValue: string;

  @SpeakeasyMetadata({ data: "form, name=title, multipart_form, name=title" })
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata({ data: "form, name=until_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=until_date;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "until_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  untilDate?: Date;
}

export class SubscriptionCreatedBy extends SpeakeasyBase {
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

// Subscription
/** 
 * Standard Subscription serializer.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bysetpos" })
  bysetpos?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "byweekday" })
  byweekday?: SubscriptionByweekdayEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => SubscriptionCreatedBy)
  createdBy: SubscriptionCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "dashboard" })
  dashboard?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "frequency" })
  frequency: SubscriptionFrequencyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "insight" })
  insight?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "interval" })
  interval?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "invite_message" })
  inviteMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "next_delivery_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  nextDeliveryDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "start_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "summary" })
  summary: string;

  @SpeakeasyMetadata()
  @Expose({ name: "target_type" })
  targetType: SubscriptionTargetTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "target_value" })
  targetValue: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "until_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  untilDate?: Date;
}