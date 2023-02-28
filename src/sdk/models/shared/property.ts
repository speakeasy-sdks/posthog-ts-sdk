import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyItem } from "./propertyitem";
import { Expose, Type } from "class-transformer";

export enum PropertyTypeEnum {
    And = "AND",
    Or = "OR"
}

export class Property extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PropertyTypeEnum;

  @SpeakeasyMetadata({ elemType: PropertyItem })
  @Expose({ name: "values" })
  @Type(() => PropertyItem)
  values: PropertyItem[];
}