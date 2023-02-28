import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GroupsPropertyDefinitionsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class GroupsPropertyDefinitionsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsPropertyDefinitionsRetrievePathParams;
}

export class GroupsPropertyDefinitionsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  group?: shared.Group;

  @SpeakeasyMetadata()
  statusCode: number;
}