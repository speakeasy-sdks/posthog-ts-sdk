import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class ResourceAccessDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent_lookup_organization_id" })
  parentLookupOrganizationId: string;
}

export class ResourceAccessDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResourceAccessDestroyPathParams;
}

export class ResourceAccessDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}