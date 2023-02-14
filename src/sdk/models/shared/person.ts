import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=distinct_ids" })
  distinctIds: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}

export class PersonInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties, form, name=properties;json=true, multipart_form, name=properties;json=true" })
  properties?: Record<string, any>;
}