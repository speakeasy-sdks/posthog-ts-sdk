import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SessionRecordingPlaylist } from "./sessionrecordingplaylist";
import { Expose, Type } from "class-transformer";


export class PaginatedSessionRecordingPlaylistList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;

  @SpeakeasyMetadata({ elemType: SessionRecordingPlaylist })
  @Expose({ name: "results" })
  @Type(() => SessionRecordingPlaylist)
  results?: SessionRecordingPlaylist[];
}