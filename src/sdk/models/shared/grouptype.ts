import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class GroupType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "group_type" })
  groupType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "group_type_index" })
  groupTypeIndex: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name_plural" })
  namePlural?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name_singular" })
  nameSingular?: string;
}