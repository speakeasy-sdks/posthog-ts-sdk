import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RoleMembershipOutput } from "./rolemembership";
import { Expose, Type } from "class-transformer";


export class PaginatedRoleMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: RoleMembershipOutput })
  @Expose({ name: "results" })
  @Type(() => RoleMembershipOutput)
  results?: RoleMembershipOutput[];
}