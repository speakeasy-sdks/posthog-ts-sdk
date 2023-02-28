import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class OrganizationDomainInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=domain, multipart_form, name=domain" })
  @Expose({ name: "domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "form, name=jit_provisioning_enabled, multipart_form, name=jit_provisioning_enabled" })
  @Expose({ name: "jit_provisioning_enabled" })
  jitProvisioningEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=saml_acs_url, multipart_form, name=saml_acs_url" })
  @Expose({ name: "saml_acs_url" })
  samlAcsUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=saml_entity_id, multipart_form, name=saml_entity_id" })
  @Expose({ name: "saml_entity_id" })
  samlEntityId?: string;

  @SpeakeasyMetadata({ data: "form, name=saml_x509_cert, multipart_form, name=saml_x509_cert" })
  @Expose({ name: "saml_x509_cert" })
  samlX509Cert?: string;

  @SpeakeasyMetadata({ data: "form, name=sso_enforcement, multipart_form, name=sso_enforcement" })
  @Expose({ name: "sso_enforcement" })
  ssoEnforcement?: string;
}

export class OrganizationDomain extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "domain" })
  domain: string;

  @SpeakeasyMetadata()
  @Expose({ name: "has_saml" })
  hasSaml: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "is_verified" })
  isVerified: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "jit_provisioning_enabled" })
  jitProvisioningEnabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "saml_acs_url" })
  samlAcsUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "saml_entity_id" })
  samlEntityId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "saml_x509_cert" })
  samlX509Cert?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sso_enforcement" })
  ssoEnforcement?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verification_challenge" })
  verificationChallenge: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verified_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  verifiedAt: Date;
}