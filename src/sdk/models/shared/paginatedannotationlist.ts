import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Annotation } from "./annotation";
import { Expose, Type } from "class-transformer";


export class PaginatedAnnotationList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: Annotation })
  @Expose({ name: "results" })
  @Type(() => Annotation)
  results?: Annotation[];
}