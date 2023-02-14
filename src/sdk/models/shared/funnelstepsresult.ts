import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class FunnelStepsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_id" })
  actionId: string;

  @SpeakeasyMetadata({ data: "json, name=average_conversion_time" })
  averageConversionTime: number;

  @SpeakeasyMetadata({ data: "json, name=converted_people_url" })
  convertedPeopleUrl: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=dropped_people_url" })
  droppedPeopleUrl: string;

  @SpeakeasyMetadata({ data: "json, name=median_conversion_time" })
  medianConversionTime: number;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order: string;
}