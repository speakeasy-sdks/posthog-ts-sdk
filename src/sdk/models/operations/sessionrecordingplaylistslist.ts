import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class SessionRecordingPlaylistsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class SessionRecordingPlaylistsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=created_by" })
  createdBy?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short_id" })
  shortId?: string;
}

export class SessionRecordingPlaylistsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionRecordingPlaylistsListPathParams;

  @SpeakeasyMetadata()
  queryParams: SessionRecordingPlaylistsListQueryParams;
}

export class SessionRecordingPlaylistsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedSessionRecordingPlaylistList?: shared.PaginatedSessionRecordingPlaylistList;

  @SpeakeasyMetadata()
  statusCode: number;
}