import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DashboardTileBasic } from "./dashboardtilebasic";


// InsightInput
/** 
 * Simplified serializer to speed response times when loading large amounts of objects.
**/
export class InsightInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dashboards" })
  dashboards?: number[];

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=derived_name" })
  derivedName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=favorited" })
  favorited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=saved" })
  saved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: any[];
}

export class InsightCreatedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distinct_id" })
  distinctId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}

export class InsightLastModifiedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distinct_id" })
  distinctId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}

// Insight
/** 
 * Simplified serializer to speed response times when loading large amounts of objects.
**/
export class Insight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: InsightCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=dashboard_tiles", elemType: DashboardTileBasic })
  dashboardTiles: DashboardTileBasic[];

  @SpeakeasyMetadata({ data: "json, name=dashboards" })
  dashboards?: number[];

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=derived_name" })
  derivedName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=effective_privilege_level" })
  effectivePrivilegeLevel: number;

  @SpeakeasyMetadata({ data: "json, name=effective_restriction_level" })
  effectiveRestrictionLevel: number;

  @SpeakeasyMetadata({ data: "json, name=favorited" })
  favorited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=is_cached" })
  isCached: string;

  @SpeakeasyMetadata({ data: "json, name=is_sample" })
  isSample: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_modified_at" })
  lastModifiedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=last_modified_by" })
  lastModifiedBy: InsightLastModifiedBy;

  @SpeakeasyMetadata({ data: "json, name=last_refresh" })
  lastRefresh: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: string;

  @SpeakeasyMetadata({ data: "json, name=saved" })
  saved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=short_id" })
  shortId: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: any[];

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}