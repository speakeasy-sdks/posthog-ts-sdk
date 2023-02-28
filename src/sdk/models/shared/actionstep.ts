import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ActionStepUrlMatchingEnum {
    Contains = "contains",
    Regex = "regex",
    Exact = "exact",
    Unknown = "",
    Null = "null"
}

export class ActionStep extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "event" })
  event?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "href" })
  href?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  properties?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "selector" })
  selector?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tag_name" })
  tagName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url_matching" })
  urlMatching?: ActionStepUrlMatchingEnum;
}