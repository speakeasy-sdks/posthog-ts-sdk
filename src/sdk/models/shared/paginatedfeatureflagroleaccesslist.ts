import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FeatureFlagRoleAccessOutput } from "./featureflagroleaccess";
import { Expose, Type } from "class-transformer";


export class PaginatedFeatureFlagRoleAccessList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: FeatureFlagRoleAccessOutput })
  @Expose({ name: "results" })
  @Type(() => FeatureFlagRoleAccessOutput)
  results?: FeatureFlagRoleAccessOutput[];
}