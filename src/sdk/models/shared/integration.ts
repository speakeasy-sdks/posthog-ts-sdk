import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class IntegrationCreatedBy extends SpeakeasyBase {
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
export enum IntegrationKindEnum {
    Slack = "slack"
}

// Integration
/** 
 * Standard Integration serializer.
**/
export class Integration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: IntegrationCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind: IntegrationKindEnum;
}

// IntegrationInput
/** 
 * Standard Integration serializer.
**/
export class IntegrationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config, form, name=config;json=true, multipart_form, name=config;json=true" })
  config?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=kind, form, name=kind;, multipart_form, name=kind" })
  kind: IntegrationKindEnum;
}