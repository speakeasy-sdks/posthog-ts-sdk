import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GroupsTypesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class GroupsTypesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsTypesListPathParams;
}

export class GroupsTypesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GroupType })
  groupTypes?: shared.GroupType[];

  @SpeakeasyMetadata()
  statusCode: number;
}