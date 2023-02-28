import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyDefinition } from "./propertydefinition";
import { Expose, Type } from "class-transformer";


export class PaginatedPropertyDefinitionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: PropertyDefinition })
  @Expose({ name: "results" })
  @Type(() => PropertyDefinition)
  results?: PropertyDefinition[];
}