import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ExportsContentRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class ExportsContentRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportsContentRetrievePathParams;
}

export class ExportsContentRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exportedAsset?: shared.ExportedAsset;

  @SpeakeasyMetadata()
  statusCode: number;
}