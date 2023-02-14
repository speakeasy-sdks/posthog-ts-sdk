import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// PatchedInsightInput
/** 
 * Simplified serializer to speed response times when loading large amounts of objects.
**/
export class PatchedInsightInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dashboards" })
  dashboards?: number[];

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=derived_name" })
  derivedName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=favorited" })
  favorited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=saved" })
  saved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: any[];
}