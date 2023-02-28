import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PersonsFunnelCorrelationRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PersonsFunnelCorrelationRetrieveFormatEnum {
    Csv = "csv",
    Json = "json"
}

export class PersonsFunnelCorrelationRetrieveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: PersonsFunnelCorrelationRetrieveFormatEnum;
}

export class PersonsFunnelCorrelationRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PersonsFunnelCorrelationRetrievePathParams;

  @SpeakeasyMetadata()
  queryParams: PersonsFunnelCorrelationRetrieveQueryParams;
}

export class PersonsFunnelCorrelationRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  person?: shared.Person;

  @SpeakeasyMetadata()
  statusCode: number;
}