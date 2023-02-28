import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class DashboardTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=name, multipart_form, name=name" })
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata({ data: "form, name=url, multipart_form, name=url" })
  @Expose({ name: "url" })
  url: string;
}