import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FeatureFlag } from "./featureflag";
import { Expose, Type } from "class-transformer";


export class PaginatedFeatureFlagList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: FeatureFlag })
  @Expose({ name: "results" })
  @Type(() => FeatureFlag)
  results?: FeatureFlag[];
}