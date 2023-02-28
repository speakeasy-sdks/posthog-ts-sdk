import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class IntegrationCreatedBy extends SpeakeasyBase {
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
export enum IntegrationKindEnum {
    Slack = "slack"
}

// Integration
/** 
 * Standard Integration serializer.
**/
export class Integration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "config" })
  config?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => IntegrationCreatedBy)
  createdBy: IntegrationCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  errors: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind: IntegrationKindEnum;
}

// IntegrationInput
/** 
 * Standard Integration serializer.
**/
export class IntegrationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=config;json=true, multipart_form, name=config;json=true" })
  @Expose({ name: "config" })
  config?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=kind, multipart_form, name=kind" })
  @Expose({ name: "kind" })
  kind: IntegrationKindEnum;
}