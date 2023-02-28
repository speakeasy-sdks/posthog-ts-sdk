import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// PatchedInsightInput
/** 
 * Simplified serializer to speed response times when loading large amounts of objects.
**/
export class PatchedInsightInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dashboards" })
  dashboards?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "derived_name" })
  derivedName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "favorited" })
  favorited?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  query?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "saved" })
  saved?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "tags" })
  tags?: any[];
}