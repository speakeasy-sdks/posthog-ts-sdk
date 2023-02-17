import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// EventDefinitionInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class EventDefinitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at, form, name=created_at;, multipart_form, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at, form, name=last_seen_at;, multipart_form, name=last_seen_at" })
  lastSeenAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=post_to_slack, form, name=post_to_slack;, multipart_form, name=post_to_slack" })
  postToSlack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=query_usage_30_day, form, name=query_usage_30_day;, multipart_form, name=query_usage_30_day" })
  queryUsage30Day?: number;

  @SpeakeasyMetadata({ data: "json, name=tags, form, name=tags;, multipart_form, name=tags" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "json, name=volume_30_day, form, name=volume_30_day;, multipart_form, name=volume_30_day" })
  volume30Day?: number;
}

export class EventDefinitionCreatedBy extends SpeakeasyBase {
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

// EventDefinition
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class EventDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_id" })
  actionId: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: EventDefinitionCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=is_action" })
  isAction: string;

  @SpeakeasyMetadata({ data: "json, name=is_calculating" })
  isCalculating: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_calculated_at" })
  lastCalculatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_updated_at" })
  lastUpdatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=post_to_slack" })
  postToSlack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=query_usage_30_day" })
  queryUsage30Day?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "json, name=volume_30_day" })
  volume30Day?: number;
}