import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrganizationInvite } from "./organizationinvite";
import { Expose, Type } from "class-transformer";


export class PaginatedOrganizationInviteList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: OrganizationInvite })
  @Expose({ name: "results" })
  @Type(() => OrganizationInvite)
  results?: OrganizationInvite[];
}