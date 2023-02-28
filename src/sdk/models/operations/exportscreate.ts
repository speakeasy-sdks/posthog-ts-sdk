import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ExportsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class ExportsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  exportedAsset?: shared.ExportedAssetInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  exportedAsset1?: shared.ExportedAssetInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  exportedAsset2?: shared.ExportedAssetInput;
}

export class ExportsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportsCreatePathParams;

  @SpeakeasyMetadata()
  request: ExportsCreateRequests;
}

export class ExportsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exportedAsset?: shared.ExportedAsset;

  @SpeakeasyMetadata()
  statusCode: number;
}