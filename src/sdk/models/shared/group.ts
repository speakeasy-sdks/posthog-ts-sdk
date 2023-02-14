import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=group_key" })
  groupKey: string;

  @SpeakeasyMetadata({ data: "json, name=group_properties" })
  groupProperties?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=group_type_index" })
  groupTypeIndex: number;
}