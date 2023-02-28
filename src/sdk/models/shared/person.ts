import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "distinct_ids" })
  distinctIds: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  properties?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;
}

export class PersonInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=properties;json=true, multipart_form, name=properties;json=true" })
  @Expose({ name: "properties" })
  properties?: Record<string, any>;
}