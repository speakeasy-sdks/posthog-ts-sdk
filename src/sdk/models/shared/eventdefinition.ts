import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


// EventDefinitionInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class EventDefinitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=created_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=created_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "form, name=last_seen_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=last_seen_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "last_seen_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSeenAt?: Date;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata({ data: "form, name=post_to_slack, multipart_form, name=post_to_slack" })
  @Expose({ name: "post_to_slack" })
  postToSlack?: boolean;

  @SpeakeasyMetadata({ data: "form, name=query_usage_30_day, multipart_form, name=query_usage_30_day" })
  @Expose({ name: "query_usage_30_day" })
  queryUsage30Day?: number;

  @SpeakeasyMetadata({ data: "form, name=tags, multipart_form, name=tags" })
  @Expose({ name: "tags" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "form, name=volume_30_day, multipart_form, name=volume_30_day" })
  @Expose({ name: "volume_30_day" })
  volume30Day?: number;
}

export class EventDefinitionCreatedBy extends SpeakeasyBase {
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

// EventDefinition
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class EventDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action_id" })
  actionId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => EventDefinitionCreatedBy)
  createdBy: EventDefinitionCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_action" })
  isAction: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_calculating" })
  isCalculating: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "last_calculated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastCalculatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "last_seen_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSeenAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "last_updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastUpdatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "post_to_slack" })
  postToSlack?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "query_usage_30_day" })
  queryUsage30Day?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tags" })
  tags?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "volume_30_day" })
  volume30Day?: number;
}