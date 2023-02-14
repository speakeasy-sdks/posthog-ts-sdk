import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class TaggedItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;
}