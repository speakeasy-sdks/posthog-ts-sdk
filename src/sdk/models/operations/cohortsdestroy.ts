import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CohortsDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class CohortsDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CohortsDestroyPathParams;
}

export class CohortsDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}