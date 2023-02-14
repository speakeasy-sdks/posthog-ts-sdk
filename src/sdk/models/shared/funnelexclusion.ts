import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Property } from "./property";


export class FunnelExclusion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=funnel_from_step" })
  funnelFromStep?: number;

  @SpeakeasyMetadata({ data: "json, name=funnel_to_step" })
  funnelToStep?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Property;
}