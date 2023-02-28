import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Property } from "./property";
import { Expose, Type } from "class-transformer";


export class FunnelExclusion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "funnel_from_step" })
  funnelFromStep?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "funnel_to_step" })
  funnelToStep?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "properties" })
  @Type(() => Property)
  properties?: Property;
}