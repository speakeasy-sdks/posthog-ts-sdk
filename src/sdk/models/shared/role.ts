import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class RoleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feature_flags_access_level, form, name=feature_flags_access_level;, multipart_form, name=feature_flags_access_level" })
  featureFlagsAccessLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name: string;
}

export class RoleCreatedBy extends SpeakeasyBase {
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

export class Role extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associated_flags" })
  associatedFlags: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy: RoleCreatedBy;

  @SpeakeasyMetadata({ data: "json, name=feature_flags_access_level" })
  featureFlagsAccessLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}