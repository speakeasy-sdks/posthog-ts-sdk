import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GroupType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group_type" })
  groupType: string;

  @SpeakeasyMetadata({ data: "json, name=group_type_index" })
  groupTypeIndex: number;

  @SpeakeasyMetadata({ data: "json, name=name_plural" })
  namePlural?: string;

  @SpeakeasyMetadata({ data: "json, name=name_singular" })
  nameSingular?: string;
}