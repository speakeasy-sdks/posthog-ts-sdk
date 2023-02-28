import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrganizationResourceAccess } from "./organizationresourceaccess";
import { Expose, Type } from "class-transformer";


export class PaginatedOrganizationResourceAccessList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: OrganizationResourceAccess })
  @Expose({ name: "results" })
  @Type(() => OrganizationResourceAccess)
  results?: OrganizationResourceAccess[];
}