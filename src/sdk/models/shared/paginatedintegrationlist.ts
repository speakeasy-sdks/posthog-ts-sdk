import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Integration } from "./integration";
import { Expose, Type } from "class-transformer";


export class PaginatedIntegrationList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Integration })
  @Expose({ name: "results" })
  @Type(() => Integration)
  results?: Integration[];
}