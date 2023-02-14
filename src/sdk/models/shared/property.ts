import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyItem } from "./propertyitem";

export enum PropertyTypeEnum {
    And = "AND",
    Or = "OR"
}

export class Property extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PropertyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: PropertyItem })
  values: PropertyItem[];
}