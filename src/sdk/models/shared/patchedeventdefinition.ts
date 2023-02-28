import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


// PatchedEventDefinitionInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class PatchedEventDefinitionInput extends SpeakeasyBase {
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
  name?: string;

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