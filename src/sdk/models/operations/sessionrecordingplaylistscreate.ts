import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class SessionRecordingPlaylistsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}

export class SessionRecordingPlaylistsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  sessionRecordingPlaylist?: shared.SessionRecordingPlaylistInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  sessionRecordingPlaylist1?: shared.SessionRecordingPlaylistInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  sessionRecordingPlaylist2?: shared.SessionRecordingPlaylistInput;
}

export class SessionRecordingPlaylistsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionRecordingPlaylistsCreatePathParams;

  @SpeakeasyMetadata()
  request?: SessionRecordingPlaylistsCreateRequests;
}

export class SessionRecordingPlaylistsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sessionRecordingPlaylist?: shared.SessionRecordingPlaylist;

  @SpeakeasyMetadata()
  statusCode: number;
}