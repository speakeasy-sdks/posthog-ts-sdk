import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GroupsPropertyValuesRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class GroupsPropertyValuesRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_type_index" })
  groupTypeIndex: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;
}

export class GroupsPropertyValuesRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsPropertyValuesRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsPropertyValuesRetrieveQueryParams;
}

export class GroupsPropertyValuesRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  group?: shared.Group;

  @SpeakeasyMetadata()
  statusCode: number;
}