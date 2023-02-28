import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ClickhouseEvent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "distinct_id" })
  distinctId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "elements" })
  elements: string;

  @SpeakeasyMetadata()
  @Expose({ name: "elements_chain" })
  elementsChain: string;

  @SpeakeasyMetadata()
  @Expose({ name: "event" })
  event: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "person" })
  person: string;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  properties: string;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  timestamp: string;
}