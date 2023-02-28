import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GenericInsights } from "./genericinsights";
import { Expose, Type } from "class-transformer";


export class TrendResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "days" })
  days: Date[];

  @SpeakeasyMetadata()
  @Expose({ name: "filter" })
  @Type(() => GenericInsights)
  filter: GenericInsights;

  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label: string;

  @SpeakeasyMetadata()
  @Expose({ name: "labels" })
  labels: string[];
}