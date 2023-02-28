import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class FunnelStepsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action_id" })
  actionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "average_conversion_time" })
  averageConversionTime: number;

  @SpeakeasyMetadata()
  @Expose({ name: "converted_people_url" })
  convertedPeopleUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count: number;

  @SpeakeasyMetadata()
  @Expose({ name: "dropped_people_url" })
  droppedPeopleUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "median_conversion_time" })
  medianConversionTime: number;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order: string;
}