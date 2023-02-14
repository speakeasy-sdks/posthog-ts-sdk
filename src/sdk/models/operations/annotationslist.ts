import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class AnnotationsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class AnnotationsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}

export class AnnotationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AnnotationsListPathParams;

  @SpeakeasyMetadata()
  queryParams: AnnotationsListQueryParams;
}

export class AnnotationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedAnnotationList?: shared.PaginatedAnnotationList;

  @SpeakeasyMetadata()
  statusCode: number;
}