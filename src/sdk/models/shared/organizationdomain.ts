import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class OrganizationDomainInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain, form, name=domain;, multipart_form, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=jit_provisioning_enabled, form, name=jit_provisioning_enabled;, multipart_form, name=jit_provisioning_enabled" })
  jitProvisioningEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=saml_acs_url, form, name=saml_acs_url;, multipart_form, name=saml_acs_url" })
  samlAcsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=saml_entity_id, form, name=saml_entity_id;, multipart_form, name=saml_entity_id" })
  samlEntityId?: string;

  @SpeakeasyMetadata({ data: "json, name=saml_x509_cert, form, name=saml_x509_cert;, multipart_form, name=saml_x509_cert" })
  samlX509Cert?: string;

  @SpeakeasyMetadata({ data: "json, name=sso_enforcement, form, name=sso_enforcement;, multipart_form, name=sso_enforcement" })
  ssoEnforcement?: string;
}

export class OrganizationDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=has_saml" })
  hasSaml: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=is_verified" })
  isVerified: boolean;

  @SpeakeasyMetadata({ data: "json, name=jit_provisioning_enabled" })
  jitProvisioningEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=saml_acs_url" })
  samlAcsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=saml_entity_id" })
  samlEntityId?: string;

  @SpeakeasyMetadata({ data: "json, name=saml_x509_cert" })
  samlX509Cert?: string;

  @SpeakeasyMetadata({ data: "json, name=sso_enforcement" })
  ssoEnforcement?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_challenge" })
  verificationChallenge: string;

  @SpeakeasyMetadata({ data: "json, name=verified_at" })
  verifiedAt: Date;
}