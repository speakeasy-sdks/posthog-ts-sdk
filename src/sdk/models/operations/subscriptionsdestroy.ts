import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SubscriptionsDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class SubscriptionsDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubscriptionsDestroyPathParams;
}

export class SubscriptionsDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}