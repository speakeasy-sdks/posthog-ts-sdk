import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class SessionRecordingPlaylistsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=short_id" })
  shortId: string;
}

export class SessionRecordingPlaylistsPartialUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  patchedSessionRecordingPlaylist?: shared.PatchedSessionRecordingPlaylistInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  patchedSessionRecordingPlaylist1?: shared.PatchedSessionRecordingPlaylistInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  patchedSessionRecordingPlaylist2?: shared.PatchedSessionRecordingPlaylistInput;
}

export class SessionRecordingPlaylistsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionRecordingPlaylistsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  request?: SessionRecordingPlaylistsPartialUpdateRequests;
}

export class SessionRecordingPlaylistsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sessionRecordingPlaylist?: shared.SessionRecordingPlaylist;

  @SpeakeasyMetadata()
  statusCode: number;
}