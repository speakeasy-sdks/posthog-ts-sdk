import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ActionsDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum ActionsDestroyFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class ActionsDestroyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: ActionsDestroyFormatEnum;
}

export class ActionsDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDestroyPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsDestroyQueryParams;
}

export class ActionsDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}