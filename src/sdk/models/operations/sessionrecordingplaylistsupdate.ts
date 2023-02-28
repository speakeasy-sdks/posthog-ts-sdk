import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class SessionRecordingPlaylistsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=short_id" })
  shortId: string;
}

export class SessionRecordingPlaylistsUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sessionRecordingPlaylist?: shared.SessionRecordingPlaylistInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  sessionRecordingPlaylist1?: shared.SessionRecordingPlaylistInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  sessionRecordingPlaylist2?: shared.SessionRecordingPlaylistInput;
}

export class SessionRecordingPlaylistsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionRecordingPlaylistsUpdatePathParams;

  @SpeakeasyMetadata()
  request?: SessionRecordingPlaylistsUpdateRequests;
}

export class SessionRecordingPlaylistsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sessionRecordingPlaylist?: shared.SessionRecordingPlaylist;

  @SpeakeasyMetadata()
  statusCode: number;
}