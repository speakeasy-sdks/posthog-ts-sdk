import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum PatchedPropertyDefinitionPropertyTypeEnum {
    DateTime = "DateTime",
    String = "String",
    Numeric = "Numeric",
    Boolean = "Boolean",
    Unknown = "",
    Null = "null"
}

// PatchedPropertyDefinitionInput
/** 
 * Serializer mixin that resolves appropriate response for tags depending on license.
**/
export class PatchedPropertyDefinitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=is_numerical, multipart_form, name=is_numerical" })
  @Expose({ name: "is_numerical" })
  isNumerical?: boolean;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=property_type, multipart_form, name=property_type" })
  @Expose({ name: "property_type" })
  propertyType?: PatchedPropertyDefinitionPropertyTypeEnum;

  @SpeakeasyMetadata({ data: "form, name=query_usage_30_day, multipart_form, name=query_usage_30_day" })
  @Expose({ name: "query_usage_30_day" })
  queryUsage30Day?: number;

  @SpeakeasyMetadata({ data: "form, name=tags, multipart_form, name=tags" })
  @Expose({ name: "tags" })
  tags?: any[];
}