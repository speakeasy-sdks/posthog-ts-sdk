import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class PersonsDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsDestroyFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsDestroyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delete_events" })
  deleteEvents?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsDestroyFormatEnum;
}

export class PersonsDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsDestroyPathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsDestroyQueryParams;
}

export class PersonsDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}