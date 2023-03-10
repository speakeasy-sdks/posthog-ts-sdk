import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

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
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: PropertyItemOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PropertyItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}