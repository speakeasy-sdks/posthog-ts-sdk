import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PersonsFunnelCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsFunnelCreateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsFunnelCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsFunnelCreateFormatEnum;
}

export class PersonsFunnelCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  person?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  person1?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  person2?: shared.PersonInput;
}

export class PersonsFunnelCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsFunnelCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsFunnelCreateQueryParams;

  @SpeakeasyMetadata()
  request?: PersonsFunnelCreateRequests;
}

export class PersonsFunnelCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}