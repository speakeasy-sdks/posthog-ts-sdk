import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PersonsFunnelCorrelationCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsFunnelCorrelationCreateFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsFunnelCorrelationCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsFunnelCorrelationCreateFormatEnum;
}

export class PersonsFunnelCorrelationCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  person?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  person1?: shared.PersonInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  person2?: shared.PersonInput;
}

export class PersonsFunnelCorrelationCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsFunnelCorrelationCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsFunnelCorrelationCreateQueryParams;

  @SpeakeasyMetadata()
  request?: PersonsFunnelCorrelationCreateRequests;
}

export class PersonsFunnelCorrelationCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}