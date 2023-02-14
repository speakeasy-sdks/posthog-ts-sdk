import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ClickhouseEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distinct_id" })
  distinctId: string;

  @SpeakeasyMetadata({ data: "json, name=elements" })
  elements: string;

  @SpeakeasyMetadata({ data: "json, name=elements_chain" })
  elementsChain: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: string;
}