import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GroupsRelatedRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class GroupsRelatedRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_type_index" })
  groupTypeIndex: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}

export class GroupsRelatedRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsRelatedRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsRelatedRetrieveQueryParams;
}

export class GroupsRelatedRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  group?: shared.Group;

  @SpeakeasyMetadata()
  statusCode: number;
}