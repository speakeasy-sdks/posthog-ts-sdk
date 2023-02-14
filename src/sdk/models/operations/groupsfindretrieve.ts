import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GroupsFindRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class GroupsFindRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_key" })
  groupKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_type_index" })
  groupTypeIndex: number;
}

export class GroupsFindRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsFindRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsFindRetrieveQueryParams;
}

export class GroupsFindRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  group?: shared.Group;

  @SpeakeasyMetadata()
  statusCode: number;
}