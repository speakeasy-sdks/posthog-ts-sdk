import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "group_key" })
  groupKey: string;

  @SpeakeasyMetadata()
  @Expose({ name: "group_properties" })
  groupProperties?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "group_type_index" })
  groupTypeIndex: number;
}