import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PropertyDefinitionsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}
export enum PropertyDefinitionsListTypeEnum {
    Event = "event",
    Person = "person",
    Group = "group"
}

export class PropertyDefinitionsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_names" })
  eventNames?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excluded_properties" })
  excludedProperties?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_by_event_names" })
  filterByEventNames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_type_index" })
  groupTypeIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_feature_flag" })
  isFeatureFlag?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_numerical" })
  isNumerical?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=properties" })
  properties?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: PropertyDefinitionsListTypeEnum;
}

export class PropertyDefinitionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PropertyDefinitionsListPathParams;

  @SpeakeasyMetadata()
  queryParams: PropertyDefinitionsListQueryParams;
}

export class PropertyDefinitionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedPropertyDefinitionList?: shared.PaginatedPropertyDefinitionList;

  @SpeakeasyMetadata()
  statusCode: number;
}