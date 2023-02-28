import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class TaggedItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "tag" })
  tag: string;
}