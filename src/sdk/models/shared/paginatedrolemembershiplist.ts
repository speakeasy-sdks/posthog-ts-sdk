import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RoleMembershipOutput } from "./rolemembership";


export class PaginatedRoleMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: RoleMembershipOutput })
  results?: RoleMembershipOutput[];
}