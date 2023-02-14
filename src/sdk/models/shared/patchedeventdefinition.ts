import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// PatchedEventDefinitionInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class PatchedEventDefinitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at, form, name=created_at;, multipart_form, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at, form, name=last_seen_at;, multipart_form, name=last_seen_at" })
  lastSeenAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=post_to_slack, form, name=post_to_slack;, multipart_form, name=post_to_slack" })
  postToSlack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=query_usage_30_day, form, name=query_usage_30_day;, multipart_form, name=query_usage_30_day" })
  queryUsage30Day?: number;

  @SpeakeasyMetadata({ data: "json, name=tags, form, name=tags;json=true, multipart_form, name=tags;json=true" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "json, name=volume_30_day, form, name=volume_30_day;, multipart_form, name=volume_30_day" })
  volume30Day?: number;
}