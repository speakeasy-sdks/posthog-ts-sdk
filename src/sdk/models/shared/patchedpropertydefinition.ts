import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

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
  @SpeakeasyMetadata({ data: "json, name=is_numerical, form, name=is_numerical;, multipart_form, name=is_numerical" })
  isNumerical?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=property_type, form, name=property_type;, multipart_form, name=property_type" })
  propertyType?: PatchedPropertyDefinitionPropertyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=query_usage_30_day, form, name=query_usage_30_day;, multipart_form, name=query_usage_30_day" })
  queryUsage30Day?: number;

  @SpeakeasyMetadata({ data: "json, name=tags, form, name=tags;, multipart_form, name=tags" })
  tags?: any[];
}