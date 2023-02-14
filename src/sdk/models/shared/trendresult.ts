import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GenericInsights } from "./genericinsights";


export class TrendResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: number[];

  @SpeakeasyMetadata({ data: "json, name=days" })
  days: Date[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter: GenericInsights;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: string[];
}