import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DashboardTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name, form, name=name;, multipart_form, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=url, form, name=url;, multipart_form, name=url" })
  url: string;
}