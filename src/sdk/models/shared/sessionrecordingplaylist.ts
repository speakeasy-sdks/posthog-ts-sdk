import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SessionRecordingPlaylistInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted, form, name=deleted;, multipart_form, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=derived_name, form, name=derived_name;, multipart_form, name=derived_name" })
  derivedName?: string;

  @SpeakeasyMetadata({ data: "json, name=description, form, name=description;, multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=filters, form, name=filters;json=true, multipart_form, name=filters;json=true" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pinned, form, name=pinned;, multipart_form, name=pinned" })
  pinned?: boolean;
}

export class SessionRecordingPlaylistCreatedBy extends SpeakeasyBase {
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

export class SessionRecordingPlaylistLastModifiedBy extends SpeakeasyBase {
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

export class SessionRecordingPlaylist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: SessionRecordingPlaylistCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=derived_name" })
  derivedName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=last_modified_at" })
  lastModifiedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=last_modified_by" })
  lastModifiedBy: SessionRecordingPlaylistLastModifiedBy;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=short_id" })
  shortId: string;
}