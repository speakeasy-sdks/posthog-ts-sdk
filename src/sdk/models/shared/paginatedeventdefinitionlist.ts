import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventDefinition } from "./eventdefinition";
import { Expose, Type } from "class-transformer";


export class PaginatedEventDefinitionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: EventDefinition })
  @Expose({ name: "results" })
  @Type(() => EventDefinition)
  results?: EventDefinition[];
}