import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

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
  @SpeakeasyMetadata({ data: "json, name=bysetpos, form, name=bysetpos;, multipart_form, name=bysetpos" })
  bysetpos?: number;

  @SpeakeasyMetadata({ data: "json, name=byweekday, form, name=byweekday;, multipart_form, name=byweekday" })
  byweekday?: PatchedSubscriptionByweekdayEnum[];

  @SpeakeasyMetadata({ data: "json, name=count, form, name=count;, multipart_form, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=dashboard, form, name=dashboard;, multipart_form, name=dashboard" })
  dashboard?: number;

  @SpeakeasyMetadata({ data: "json, name=deleted, form, name=deleted;, multipart_form, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=frequency, form, name=frequency;, multipart_form, name=frequency" })
  frequency?: PatchedSubscriptionFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=insight, form, name=insight;, multipart_form, name=insight" })
  insight?: number;

  @SpeakeasyMetadata({ data: "json, name=interval, form, name=interval;, multipart_form, name=interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=invite_message, form, name=invite_message;, multipart_form, name=invite_message" })
  inviteMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date, form, name=start_date;, multipart_form, name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=target_type, form, name=target_type;, multipart_form, name=target_type" })
  targetType?: PatchedSubscriptionTargetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=target_value, form, name=target_value;, multipart_form, name=target_value" })
  targetValue?: string;

  @SpeakeasyMetadata({ data: "json, name=title, form, name=title;, multipart_form, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=until_date, form, name=until_date;, multipart_form, name=until_date" })
  untilDate?: Date;
}