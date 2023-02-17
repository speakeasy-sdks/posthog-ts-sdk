import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ActionStep } from "./actionstep";


// PatchedActionInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class PatchedActionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted, form, name=deleted;, multipart_form, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description, form, name=description;, multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=last_calculated_at, form, name=last_calculated_at;, multipart_form, name=last_calculated_at" })
  lastCalculatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=post_to_slack, form, name=post_to_slack;, multipart_form, name=post_to_slack" })
  postToSlack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slack_message_format, form, name=slack_message_format;, multipart_form, name=slack_message_format" })
  slackMessageFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=steps, form, name=steps;json=true, multipart_form, name=steps;json=true", elemType: ActionStep })
  steps?: ActionStep[];

  @SpeakeasyMetadata({ data: "json, name=tags, form, name=tags;, multipart_form, name=tags" })
  tags?: any[];
}