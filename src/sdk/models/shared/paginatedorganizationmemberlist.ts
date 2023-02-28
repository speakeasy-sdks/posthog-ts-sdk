import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrganizationMember } from "./organizationmember";
import { Expose, Type } from "class-transformer";


export class PaginatedOrganizationMemberList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: OrganizationMember })
  @Expose({ name: "results" })
  @Type(() => OrganizationMember)
  results?: OrganizationMember[];
}