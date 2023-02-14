import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum ActionStepUrlMatchingEnum {
    Contains = "contains",
    Regex = "regex",
    Exact = "exact",
    Unknown = "",
    Null = "null"
}

export class ActionStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector?: string;

  @SpeakeasyMetadata({ data: "json, name=tag_name" })
  tagName?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=url_matching" })
  urlMatching?: ActionStepUrlMatchingEnum;
}