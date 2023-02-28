import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Role } from "./role";
import { Expose, Type } from "class-transformer";


export class PaginatedRoleList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Role })
  @Expose({ name: "results" })
  @Type(() => Role)
  results?: Role[];
}