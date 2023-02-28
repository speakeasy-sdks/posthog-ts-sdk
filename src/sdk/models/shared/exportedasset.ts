import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum ExportedAssetExportFormatEnum {
    ImagePng = "image/png",
    ApplicationPdf = "application/pdf",
    TextCsv = "text/csv"
}

// ExportedAsset
/** 
 * Standard ExportedAsset serializer that doesn't return content.
**/
export class ExportedAsset extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "dashboard" })
  dashboard?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "export_context" })
  exportContext?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "export_format" })
  exportFormat: ExportedAssetExportFormatEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "filename" })
  filename: string;

  @SpeakeasyMetadata()
  @Expose({ name: "has_content" })
  hasContent: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "insight" })
  insight?: number;
}

// ExportedAssetInput
/** 
 * Standard ExportedAsset serializer that doesn't return content.
**/
export class ExportedAssetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=dashboard, multipart_form, name=dashboard" })
  @Expose({ name: "dashboard" })
  dashboard?: number;

  @SpeakeasyMetadata({ data: "form, name=export_context;json=true, multipart_form, name=export_context;json=true" })
  @Expose({ name: "export_context" })
  exportContext?: Record<string, any>;

  @SpeakeasyMetadata({ data: "form, name=export_format, multipart_form, name=export_format" })
  @Expose({ name: "export_format" })
  exportFormat: ExportedAssetExportFormatEnum;

  @SpeakeasyMetadata({ data: "form, name=insight, multipart_form, name=insight" })
  @Expose({ name: "insight" })
  insight?: number;
}