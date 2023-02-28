import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrganizationDomain } from "./organizationdomain";
import { Expose, Type } from "class-transformer";


export class PaginatedOrganizationDomainList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: OrganizationDomain })
  @Expose({ name: "results" })
  @Type(() => OrganizationDomain)
  results?: OrganizationDomain[];
}