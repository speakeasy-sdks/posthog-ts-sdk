import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ActionStep } from "./actionstep";


// ActionInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class ActionInput extends SpeakeasyBase {
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

export class ActionCreatedBy extends SpeakeasyBase {
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

// Action
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: ActionCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=is_action" })
  isAction: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_calculating" })
  isCalculating: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_calculated_at" })
  lastCalculatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=post_to_slack" })
  postToSlack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=slack_message_format" })
  slackMessageFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: ActionStep })
  steps?: ActionStep[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "json, name=team_id" })
  teamId: number;
}