import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class PatchedSessionRecordingPlaylistInput extends SpeakeasyBase {
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