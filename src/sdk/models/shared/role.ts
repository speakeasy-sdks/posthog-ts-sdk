import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class RoleInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=feature_flags_access_level, multipart_form, name=feature_flags_access_level" })
  @Expose({ name: "feature_flags_access_level" })
  featureFlagsAccessLevel?: number;

  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name: string;
}

export class RoleCreatedBy extends SpeakeasyBase {
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

export class Role extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "associated_flags" })
  associatedFlags: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  @Type(() => RoleCreatedBy)
  createdBy: RoleCreatedBy;

  @SpeakeasyMetadata()
  @Expose({ name: "feature_flags_access_level" })
  featureFlagsAccessLevel?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "members" })
  members: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}