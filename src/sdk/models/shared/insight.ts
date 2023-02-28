import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DashboardTileBasic } from "./dashboardtilebasic";
import { Expose, Transform, Type } from "class-transformer";


// InsightInput
/** 
 * Simplified serializer to speed response times when loading large amounts of objects.
**/
export class InsightInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dashboards" })
  dashboards?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "derived_name" })
  derivedName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "favorited" })
  favorited?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  query?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "saved" })
  saved?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "tags" })
  tags?: any[];
}

export class InsightCreatedBy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "distinct_id" })
  distinctId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;
}

export class InsightLastModifiedBy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "distinct_id" })
  distinctId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "uuid" })
  uuid: string;
}

// Insight
/** 
 * Simplified serializer to speed response times when loading large amounts of objects.
**/
export class Insight extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => InsightCreatedBy)
  createdBy: InsightCreatedBy;

  @SpeakeasyMetadata({ elemType: DashboardTileBasic })
  @Expose({ name: "dashboard_tiles" })
  @Type(() => DashboardTileBasic)
  dashboardTiles: DashboardTileBasic[];

  @SpeakeasyMetadata()
  @Expose({ name: "dashboards" })
  dashboards?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "derived_name" })
  derivedName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "effective_privilege_level" })
  effectivePrivilegeLevel: number;

  @SpeakeasyMetadata()
  @Expose({ name: "effective_restriction_level" })
  effectiveRestrictionLevel: number;

  @SpeakeasyMetadata()
  @Expose({ name: "favorited" })
  favorited?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "is_cached" })
  isCached: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_sample" })
  isSample: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "last_modified_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastModifiedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "last_modified_by" })
  @Type(() => InsightLastModifiedBy)
  lastModifiedBy: InsightLastModifiedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "last_refresh" })
  lastRefresh: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  query?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "result" })
  result: string;

  @SpeakeasyMetadata()
  @Expose({ name: "saved" })
  saved?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "short_id" })
  shortId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tags" })
  tags?: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updated_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;
}