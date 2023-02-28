import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TeamBasic } from "./teambasic";
import { Expose, Type } from "class-transformer";


export class PaginatedTeamBasicList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: TeamBasic })
  @Expose({ name: "results" })
  @Type(() => TeamBasic)
  results?: TeamBasic[];
}