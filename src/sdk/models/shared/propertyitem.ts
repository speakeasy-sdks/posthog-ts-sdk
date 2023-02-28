import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum PropertyItemOperatorEnum {
    Exact = "exact",
    IsNot = "is_not",
    Icontains = "icontains",
    NotIcontains = "not_icontains",
    Regex = "regex",
    NotRegex = "not_regex",
    Gt = "gt",
    Lt = "lt",
    Gte = "gte",
    Lte = "lte",
    IsSet = "is_set",
    IsNotSet = "is_not_set",
    IsDateExact = "is_date_exact",
    IsDateAfter = "is_date_after",
    IsDateBefore = "is_date_before",
    Unknown = "",
    Null = "null"
}
export enum PropertyItemTypeEnum {
    Event = "event",
    Person = "person",
    Cohort = "cohort",
    Element = "element",
    StaticCohort = "static-cohort",
    PrecalculatedCohort = "precalculated-cohort",
    Group = "group",
    Recording = "recording",
    Behavioral = "behavioral",
    Session = "session",
    Hogql = "hogql",
    Unknown = ""
}

export class PropertyItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;

  @SpeakeasyMetadata()
  @Expose({ name: "operator" })
  operator?: PropertyItemOperatorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: PropertyItemTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}