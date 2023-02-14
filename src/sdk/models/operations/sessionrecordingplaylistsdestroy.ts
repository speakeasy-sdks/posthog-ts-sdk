import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SessionRecordingPlaylistsDestroyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=short_id" })
  shortId: string;
}

export class SessionRecordingPlaylistsDestroyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionRecordingPlaylistsDestroyPathParams;
}

export class SessionRecordingPlaylistsDestroyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}