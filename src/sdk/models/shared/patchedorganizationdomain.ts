import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class PatchedOrganizationDomainInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=domain, multipart_form, name=domain" })
  @Expose({ name: "domain" })
  domain?: string;

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