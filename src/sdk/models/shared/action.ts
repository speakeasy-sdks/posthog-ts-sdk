import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ActionStep } from "./actionstep";
import { Expose, Transform, Type } from "class-transformer";


// ActionInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class ActionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=deleted, multipart_form, name=deleted" })
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "form, name=description, multipart_form, name=description" })
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=last_calculated_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ, multipart_form, name=last_calculated_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  @Expose({ name: "last_calculated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastCalculatedAt?: Date;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=post_to_slack, multipart_form, name=post_to_slack" })
  @Expose({ name: "post_to_slack" })
  postToSlack?: boolean;

  @SpeakeasyMetadata({ data: "form, name=slack_message_format, multipart_form, name=slack_message_format" })
  @Expose({ name: "slack_message_format" })
  slackMessageFormat?: string;

  @SpeakeasyMetadata({ data: "form, name=steps;json=true, multipart_form, name=steps;json=true", elemType: ActionStep })
  @Expose({ name: "steps" })
  @Type(() => ActionStep)
  steps?: ActionStep[];

  @SpeakeasyMetadata({ data: "form, name=tags, multipart_form, name=tags" })
  @Expose({ name: "tags" })
  tags?: any[];
}

export class ActionCreatedBy extends SpeakeasyBase {
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

// Action
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => ActionCreatedBy)
  createdBy: ActionCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "is_action" })
  isAction: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "is_calculating" })
  isCalculating: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "last_calculated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastCalculatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "post_to_slack" })
  postToSlack?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "slack_message_format" })
  slackMessageFormat?: string;

  @SpeakeasyMetadata({ elemType: ActionStep })
  @Expose({ name: "steps" })
  @Type(() => ActionStep)
  steps?: ActionStep[];

  @SpeakeasyMetadata()
  @Expose({ name: "tags" })
  tags?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId: number;
}