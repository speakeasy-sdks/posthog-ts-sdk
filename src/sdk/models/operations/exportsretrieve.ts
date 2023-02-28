import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ExportsRetrievePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class ExportsRetrieveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportsRetrievePathParams;
}

export class ExportsRetrieveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exportedAsset?: shared.ExportedAsset;

  @SpeakeasyMetadata()
  statusCode: number;
}